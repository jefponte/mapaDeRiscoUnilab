import { Box, ThemeProvider, Typography, createTheme } from "@mui/material"
import { Header } from "./components/Header";
import Layout from "./components/Layout";
import { Routes, Route, Link } from "react-router-dom";
import { EventList } from "./features/events/EventList";
import { EventSelect } from "./features/events/EventSelect";
import { Footer } from "./components/Footer";


function App() {
  return (

      <Box
        component="main"
        sx={{
          height: "90vh"
        }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<EventList />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/:id" element={<EventSelect />} />
            <Route path="*" element={
              <Box sx={{ color: "white" }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h2">Página não encontrada</Typography>
              </Box>} />
          </Routes>
        </Layout>
      </Box>
  )
}

export default App
