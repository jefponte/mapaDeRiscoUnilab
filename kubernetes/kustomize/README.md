# Kustomize

## Table of Contents

- [Kustomize](#kustomize)
  - [Table of Contents](#table-of-contents)
  - [About ](#about-)
  - [Getting Started ](#getting-started-)
    - [Prerequisites ](#prerequisites-)
    - [Installing ](#installing-)
  - [Usage ](#usage-)
  - [✍️ Autores ](#️-autores-)

## About <a name = "about"></a>

Kustomize é uma ferramenta projetada para permitir que os usuários personalizem arquivos YAML brutos e sem modelo para várias finalidades, deixando o YAML original intocado e utilizável.  

Os usuários podem executar kustomize diretamente ou usando `kubectl -k` (a partir do Kubernetes 1.14+).


## Getting Started <a name = "getting_started"></a>

Estas instruções fornecerão uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento. Consulte [implantação](#deployment) para obter notas sobre como implantar o projeto em um sistema de produção.

### Prerequisites <a name = "prerequisites"></a>

O Kustomize vem pré-empacotado com a versão kubectl >= 1.14. Caso sua versão instalada seja 1.14 ou superior, não há necessidade de realizar a etapa de instalação.  
É possível verificar sua versão usando o comando:

```bash
kubectl version --short
```

### Installing <a name = "installing"></a>

Para instalar o **Kustomize cli** independente use o seguinte comando:

```bash
curl -s "https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/hack/install_kustomize.sh" | bash

sudo mv kustomize /usr/local/bin
```

> Para verificar, execute `kustomize -h` em um novo terminal.

## Usage <a name = "usage"></a>

Executando o kustomize na produção:
```bash
kubectl kustomize overlays/production
```
Executando o kustomize na homologação:
```bash
kubectl kustomize overlays/staging
```
Executando o kustomize no desenvolvimento:
```bash
kubectl kustomize overlays/developer
```

## ✍️ Autores <a name = "authors"></a>

- [@erivandosena](https://dti-gitlab.unilab.edu.br/erivando)

Veja também a lista de [contributors](https://github.com/erivandosena/pipeline-cicd-template/contributors) que participaram deste projeto.