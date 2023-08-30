import { Grid, Typography } from "@mui/material";
import React from "react";
import imagem from "../assets/img/logo-proplan.png";
import CardMedia from '@mui/material/CardMedia';

export function PanelTitle() {
    return (<>
    <br />
        <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
                <Typography component="h4" variant="h4">
                    Painel de Acompanhamento do Planejamento da UNILAB
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                Painel gerencial para acompanhamento do planejamento institucional destinado aos gestores da UNILAB e para transparência pública.
                </Typography>
            </Grid>
            <Grid item  xs={12} md={3}>
                <CardMedia
                    component="img"
                    sx={{ width: 250 }}
                    image={imagem}
                    alt="Logo Proplan"
                />
            </Grid>
        </Grid>


        <br />
    </>);
}