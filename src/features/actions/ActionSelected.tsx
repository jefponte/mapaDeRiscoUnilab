import { useEffect } from "react";
import { useParams } from "react-router";
import { gettingActions } from "../../services/api";
import CardLoad from "../../components/CardLoad";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getActions, selectActionById } from "./actionSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";


export const ActionSelected = () => {
    const { id } = useParams();
    const selected = useAppSelector((state) => selectActionById(state, id));
    const dispatch = useAppDispatch();

    const fetchData = async () => {
      const data = await gettingActions();
      dispatch(getActions({ actions: data }));
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
                  {/* Área: {selected?.area} */} TEste
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {/* Processo: {selected?.process} */} TEste
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {/* Evento de Risco: {selected?.riskEvent} */} TEste
                </Typography>
                <Link to={"/"}>
                  Retornar ao Painel
                </Link>

              </CardContent>
            </Card>

            {/* <br /><CardActions acoes={selected?.acoes} /> TEste */}
          </Grid>


          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Avaliação dos Riscos
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {/* Probabilidade: {selected?.probability} */} TEste
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {/* Impacto: {selected?.impact} */} TEste
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {/* Classificação do Risco Inerente: {selected?.riskClass} */} TEste
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {/* Classificação: {selected?.classificacaoObjetivo} TEste */}
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
                  {/* Opção de Tratamento:  {selected?.treatmentOption} */} TEste
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {/* Ações Propostas : {selected?.actions} */} TEste
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {/* Responsável : {selected?.department} */} TEste
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {/* Início: {selected?.start} */} TEste
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {/* Término: {selected?.end} */} TEste
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {/* Situação: {selected?.status} */} TEste
                </Typography>

              </CardContent>
            </Card>
          </Grid>





        </Grid>
      </Box>
    )
  }