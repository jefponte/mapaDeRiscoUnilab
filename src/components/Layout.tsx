import { AppBar, CssBaseline, ThemeProvider } from "@mui/material";
import { Box, Card, Container } from '@mui/material'
import React from 'react'
import { PanelTitle } from './PanelTitle';
import { useAppTheme } from "../hooks/useAppTheme";
import { Header } from "./Header";
import { Footer } from "./Footer";


export default function Layout({ children }: { children: React.ReactNode }) {
    const [currentTheme, toggleCurrentTheme] = useAppTheme();

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Header />
            <Box sx={{ display: "flex" }}>
                <Container maxWidth={'lg'} sx={{ color: "white", mt: 1, mb: 2 }}>
                    <PanelTitle />
                    {children}
                </Container>
            </Box>
            <Footer />
        </ThemeProvider>
    )
}
