import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';


const List1 = () => {
    return (<><List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="Muito baixa (1)"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            baixíssima possibilidade de o evento ocorrer.
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="Baixa (2)"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            o evento ocorre raramente.
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="Média (3)"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            o evento já ocorreu algumas vezes e pode voltar a ocorrer.
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="Alta (4)"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            o evento já ocorreu repetidas vezes e provavelmente voltará a ocorrer muitas vezes.
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>

    </List></>);
}

const List2 = () => {
    return (<><List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="Muito baixo (1)"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            consequências insignificantes caso o evento ocorra.
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="Baixo (2)"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            consequências menores em processos e atividades secundários.
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="Médio (3)"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                           consequências relevantes em processos e atividades secundários ou consequências menores em processos e atividades prioritárias.
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="Alto (4)"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                           consequências relevantes em processos e atividades prioritárias
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>

    </List></>);
}

const List3 = () => {
    return (<><List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="BAIXO"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {`< ou = 3`}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="MODERADO"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                           {`> 3 e < ou = 6`}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="ELEVADO"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {`> 6 e < ou = 12`}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="EXTREMO"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {`> 12`}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>

    </List></>);
}

const List4 = () => {
    return (<><List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="ACEITAR"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            a entidade decide não atuar em relação ao risco. A sua probabilidade e impacto são tão baixos que não justificam a criação de controles para mitigação, ou os controles existentes já resguardam boa parte de suas consequências. É geralmente uma ação escolhida para riscos com baixo impacto e probabilidade.
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="TRANSFERIR"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                           o risco possui probabilidade e impacto tão altos que a organização não pode suportar e decide transferi-los a outra entidade. Por exemplo, um órgão público decide contratar um seguro de acidentes para certos empregados que exercem atividades muito perigosas – ele transfere o seu risco de sinistro para uma outra entidade.
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="MITIGAR"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                           o órgão ou entidade decide atuar para reduzir a probabilidade e/ou impacto do risco, tornando-o menor ou mesmo removendo-o da lista dos principais riscos.
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
            <ListItemText
                primary="EVITAR"
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            envolve alterar o processo visando a evitar a ocorrência do risco. Por exemplo, um órgão pode decidir evitar o oferecimento de determinado servi￧o por envolver riscos de alto impacto e probabilidade.
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>

    </List></>);
}
export function Legend() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>PROBABILIDADE (P)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List1 />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>IMPACTO (I)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List2 />
                </AccordionDetails>
            </Accordion>


            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>NÍVEL DO RISCO</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List3 />
                </AccordionDetails>
            </Accordion>



            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>TRATAMENTO DE RISCOS	</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List4 />
                </AccordionDetails>
            </Accordion>

        </div>
    );
}


