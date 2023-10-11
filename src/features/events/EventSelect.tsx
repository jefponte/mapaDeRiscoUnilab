import { useEffect } from "react";
import { useParams } from "react-router";
import { gettingTasks } from "../../services/api";
import CardLoad from "../../components/CardLoad";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getEvents, selectEventById } from "./eventSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export function EventSelect() {
  const { id } = useParams();
  const selected = useAppSelector((state) => selectEventById(state, id));
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    const data = await gettingTasks();
    dispatch(getEvents({ events: data }));
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (selected === null) {
    return (
      <>
        <CardLoad />
      </>
    );
  }

  return (
    <Box sx={{ minWidth: 275 }}>
      <br />
      <Grid container spacing={4}>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Risco Institucional: Nº{selected?.id}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Área: {selected?.area}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Processo: {selected?.process}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Evento de Risco: {selected?.riskEvent}
              </Typography>
              <Link to={"/"}>
                Retornar ao Painel
              </Link>

            </CardContent>
          </Card>

          {/* <br /><CardActions acoes={selected?.acoes} /> */}
        </Grid>


        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Avaliação dos Riscos
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Probabilidade: {selected?.probability}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Impacto: {selected?.impact}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Classificação do Risco Inerente: {selected?.riskClass}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {/* Classificação: {selected?.classificacaoObjetivo} */}
              </Typography>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Resposta aos Riscos
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Opção de Tratamento:  {selected?.treatmentOption}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Ações Propostas : {selected?.actions}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Responsável : {selected?.department}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Início: {selected?.start}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Término: {selected?.end}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Situação: {selected?.status}
              </Typography>

            </CardContent>
          </Card>
        </Grid>





      </Grid>
    </Box>
  )
}
