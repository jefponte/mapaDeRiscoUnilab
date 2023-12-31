import { Search } from "@mui/icons-material";
import { Box, Card, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Modal, Typography } from "@mui/material";
import { DataGrid, ptBR } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gettingTasks } from "../../services/api";
import { Event } from "../../types/Event";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getEvents, selectEvents } from "./eventSlice";
import axios from "axios";
import { Legend } from "./components/Legend";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export function EventList() {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Event>({} as Event);
  const events = useAppSelector(selectEvents);

  const handleOpen = (params: any) => {
    setSelected(params?.row);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const columns = [
    { field: 'id', headerName: "Nº", flex: 1 },
    { field: 'area', headerName: "Área", flex: 1 },
    { field: 'process', headerName: "Processo ", flex: 2 },
    { field: 'riskEvent', headerName: "Evento de Risco", flex: 3 },
    { field: 'riskClass', headerName: "Classificação do Risco Inerente", flex: 2 },
    { field: 'treatmentOption', headerName: "Resposta ao risco - Opção de Tratamento ", flex: 1 },
    { field: 'actions', headerName: "Resposta o risco - Ações Propostas", flex: 3 },
    { field: 'status', headerName: "Situação", flex: 1 }
  ];


  const fetchData = async () => {
    const data = await gettingTasks();
    dispatch(getEvents({ events: data }));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card variant="outlined">
      <Box sx={{ height: 450, width: '100%' }}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              Risco Nº {selected.id}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selected.riskEvent}
            </Typography>
            <MenuList>
              <Divider />
              <Link to={`/events/${selected.id}`}>
                <MenuItem>
                  <ListItemIcon>
                    <Search fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Ver Detalhes</ListItemText>
                </MenuItem>
              </Link>
            </MenuList>


          </Box>
        </Modal>
        <DataGrid
          rows={events}
          columns={columns}
          loading={events.length === 0}
          rowHeight={50}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          onCellClick={handleOpen}
        />

      </Box>
      <Legend/>
    </Card>
  )
}
