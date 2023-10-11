import { Search } from "@mui/icons-material";
import { Box, Card, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Modal, Typography } from "@mui/material";
import { DataGrid, ptBR } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { gettingActions } from '../../services/api';
import { getActions, selectActions } from './actionSlice';
import { Action } from "../../types/Action";


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


export const ActionList = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Action>({} as Action);
  const actions = useAppSelector(selectActions);

  const handleOpen = (params: any) => {
    setSelected(params?.row);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const data = await gettingActions();
    console.log(data);
    dispatch(getActions({ actions: data }));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { field: 'id', headerName: "Nº", flex: 1 },
    { field: 'type', headerName: "Processo ", flex: 2 },
    { field: 'description', headerName: "Ação", flex: 3 },
    { field: 'designated', headerName: "Responsável", flex: 3 },
    { field: 'deadline', headerName: "Prazo", flex: 1 }
  ];

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
              Ação do Plano de Integridade Nº {selected.id}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selected.description}
            </Typography>
            <MenuList>
              <Divider />
              <Link to={`/actions/${selected.id}`}>
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
          rows={actions}
          columns={columns}
          loading={actions.length === 0}
          rowHeight={50}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          onCellClick={handleOpen}
        />
      </Box>
    </Card>
  )
}
