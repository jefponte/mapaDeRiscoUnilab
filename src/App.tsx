import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ActionList } from "./features/actions/ActionList";
import { ActionSelected } from "./features/actions/ActionSelected";
import { EventList } from "./features/events/EventList";
import { EventSelect } from "./features/events/EventSelect";


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

            <Route path="/actions" element={<ActionList />} />
            <Route path="/actions/:id" element={<ActionSelected />} />
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
