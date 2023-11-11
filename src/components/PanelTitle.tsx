import { Grid, Typography } from "@mui/material";
import React from "react";
import imagem from "../assets/img/logo-sgit.fw.png";
import CardMedia from '@mui/material/CardMedia';

export function PanelTitle() {
    return (<>
        <br />
        <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
                <Typography component="h4" variant="h4">
                    O Mapa de Risco Para Integridade
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    O mapa de risco para integridade compõe o rol de atividades previstas no Plano de Integridade da Unilab,
                    exercícios 2022 a 2024, contendo, em suma, o processo, o evento e a resposta ao risco, bem
                    como a situação de prazo de ação da unidade responsável pelo risco.
                </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
                <CardMedia
                    component="img"
                    sx={{ width: 400 }}
                    image={imagem}
                    alt="Logo Proplan"
                />
            </Grid>
        </Grid>


        <br />
    </>);
}