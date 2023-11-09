# Dockerfile for Painel de Acompanhamento do Planejamento da UNILAB
#
# Maintainer: Erivando Sena <erivandosena@gmail.com>
#
# Description: Este Dockerfile cria uma imagem para Microsserviço, um aplicativo da Web escrito em React.
#
# Build instructions:
#   docker build -f ./Dockerfile -t dti-registro.unilab.edu.br/unilab/painelplanunilab:latest --build-arg VERSION=1.0.0 --build-arg COMMIT_SHA=$(git rev-parse --short HEAD) --no-cache ./source/
#   docker push dti-registro.unilab.edu.br/unilab/painelplanunilab:latest
#
# Usage:
#
#   docker run -it --rm -d -p 8088:80 --name painelplanejamento dti-registro.unilab.edu.br/unilab/painelplanunilab:latest
#   docker logs -f --tail --until=2s painelplanejamento
#   docker exec -it painelplanejamento bash
#   docker inspect --format='{{json .Config.Labels}}' dti-registro.unilab.edu.br/unilab/painelplanunilab:latest | jq .
#
# Dependencies: node:lts / nginx:1.24
#
# Environment variables:
#
#   COMMIT_SHA: o hash SHA-1 de um determinado commit do Git.
#   VERSION: usado na tag de imagem ou como parte dos metadados da mesma.
#
# Notes:
#
# - Este Dockerfile assume que o código do aplicativo está localizado no diretório atual ou (./source)
# - O aplicativo pode ser acessado em um navegador da Web em https://painelplanejamento.unilab.edu.br/
#
# Version: 1.0

# Step of compilation
FROM node:lts-bullseye as build
WORKDIR /app
COPY package*.json ./

COPY . .
RUN npm ci
RUN npm run build

# Step of production
FROM nginx:1.24-bullseye

ARG COMMIT_SHA
ARG VERSION

RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends \
  software-properties-common \
  openssh-server \
  unzip \
  jq \
  nano \
  wget \
  curl \
  sudo \
  rsync \
  telnet \
  iputils-ping \
  && rm -rf /var/lib/apt/lists/*

# Setup vault
ENV VAULT_ADDR=http://dti-vault.unilab.edu.br
RUN curl -o vault.zip -k https://releases.hashicorp.com/vault/1.13.3/vault_1.13.3_linux_amd64.zip; yes | unzip vault.zip \
  && mv vault /usr/local/bin/ && rm vault.zip
RUN curl -sL -o vaultenv https://github.com/channable/vaultenv/releases/download/v0.15.1/vaultenv-0.15.1-linux-musl \
  && mv vaultenv /usr/local/bin/ && chmod +x /usr/local/bin/vaultenv

# User to only debugs
RUN adduser --disabled-password --shell /bin/bash --gecos "User DevOps" --force-badname admin \
  && echo "admin ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Setup ssh
RUN sed -i "s/#Port 22/Port 22/g" /etc/ssh/sshd_config
RUN sed -i "s/#PermitRootLogin prohibit-password/PermitRootLogin no/g" /etc/ssh/sshd_config
RUN sed -i "s/#PasswordAuthentication yes/PasswordAuthentication no/g" /etc/ssh/sshd_config
RUN echo 'AllowUsers admin' >> /etc/ssh/sshd_config
RUN mkdir -p /home/admin/.ssh && touch /home/admin/.ssh/authorized_keys
RUN chmod 700 /home/admin/.ssh && chmod 600 /home/admin/.ssh/authorized_keys && chown -Rf admin:admin /home/admin

WORKDIR /usr/share/nginx/html
COPY --from=build /app/build/ ./
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 22

LABEL \
  org.opencontainers.image.vendor="UNILAB" \
  org.opencontainers.image.title="Official Node image" \
  org.opencontainers.image.description="Painel de Acompanhamento do Planejamento da UNILAB" \
  org.opencontainers.image.version="${VERSION}" \
  org.opencontainers.image.url="https://painelplanejamento.unilab.edu.br/" \
  org.opencontainers.image.source="http://dti-gitlab.unilab.edu.br/dti/painelplanejamento.git" \
  org.opencontainers.image.revision="${COMMIT_SHA}" \
  org.opencontainers.image.licenses="N/D" \
  org.opencontainers.image.author="Jeff Ponte" \
  org.opencontainers.image.company="Universidade da Integracao Internacional da Lusofonia Afro-Brasileira (UNILAB)" \
  org.opencontainers.image.maintainer="DTI/Unilab"

CMD ["/bin/bash", "-c", "service ssh restart && nginx -g 'daemon off;'"]