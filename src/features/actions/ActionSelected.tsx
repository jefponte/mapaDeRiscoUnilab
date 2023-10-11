import { useEffect } from "react";
import { useParams } from "react-router";
import { gettingActions } from "../../services/api";
import CardLoad from "../../components/CardLoad";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getActions, selectActionById } from "./actionSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Monitoring } from "../../types/Action";

const CardMonigoring = ({ monitoring }: { monitoring: Monitoring[] }) => {
    return (<Card>
        <CardContent>
            <Typography variant="h5" component="div">
                Monitoramentos
            </Typography>
            <Grid container spacing={4}>
                {monitoring.map((element, index) => {
                    return (
                        <Grid key={element.id} item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <Card>
                                <CardContent>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Nota de Monitoramento: {element.monitoring_note}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Processo SEI: {element.process}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Data da Nota: {element.note_date}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Status: {element.status}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Evidência/comprovação: {element.status}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Observação: {element.status}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>



        </CardContent>
    </Card>);
}

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
                                Ação do Plano de Integridade
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                ID: {selected?.id}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Descrição da Ação: {selected?.description}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Responsável: {selected?.designated}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Prazo/ Periodicidade: {selected?.deadline}
                            </Typography>
                            <Link to={"/"}>
                                Retornar ao Painel
                            </Link>

                        </CardContent>
                    </Card>
                </Grid>


                <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                    <CardMonigoring monitoring={selected.monitoring} />
                </Grid>

                {/* <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
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
                  Término: {selected?.end} TEste
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Situação: {selected?.status} TEste
                </Typography>

              </CardContent>
            </Card>
          </Grid> */}





            </Grid>
        </Box>
    )
}