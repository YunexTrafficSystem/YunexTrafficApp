import { useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HandymanIcon from '@mui/icons-material/Handyman';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function SecondaryListItems(props) {
  const [lab, setLab] = useState(false)
  const handleLab = () => {
    const NewOpen = !lab
    setLab(NewOpen)
  }
  const [ehs, setEhs] = useState(false)
  const handleEhs = () => {
    const NewOpen = !ehs
    setEhs(NewOpen)
  }
  const [ens, setEns] = useState(false)
  const handleEns = () =>{
    const NewOpen = !ens
    setEns(NewOpen)
  }

  return (
    <>  
          <Container align="center">
            <Typography variant="body3" color="initial" >
              MENÚ
            </Typography>
          </Container>
            

          <ListItemButton onClick={handleLab}>
            <ListItemIcon>
              < ContentPasteIcon/>
            </ListItemIcon>
            <ListItemText primary="Laboratorio" />
            {lab ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={lab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}
                onClick={() => {
                  props.onClick(1);
                }}
              >
                <ListItemText primary="Balance" align="center"/>
              </ListItemButton>

            </List>
          </Collapse>




          <ListItemButton onClick={handleEns}>
            <ListItemIcon>
              <HandymanIcon />
            </ListItemIcon>
            <ListItemText primary="Ensambles" />
            {ens ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={ens} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}
                onClick={() => {
                  props.onClick(2);
                }}
              >

                <ListItemText primary="Balance" align="center"/>
              </ListItemButton>

            </List>
          </Collapse>





          <ListItemButton>
            <ListItemIcon>
              <WorkRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Mantenimiento" />
          </ListItemButton>


          <ListItemButton
            onClick={() => {
              props.onClick(3);
            }}
          >
            <ListItemIcon>
              <UploadFileOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Garantias" />
          </ListItemButton>

          <ListItemButton onClick={handleEhs}>
            <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
            <ListItemText primary="EHS" />
            {ehs ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>


          <Collapse in={ehs} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}
                onClick={() => {
                  props.onClick(4);
                }}>

                <ListItemText primary="Datos Personales" align="center"/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}
                onClick={() => {
                  props.onClick(5);
                }}
              >

                <ListItemText primary="Preoperacionales" align="center"/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}
                onClick={() => {
                  props.onClick(6);
                }}>

                <ListItemText primary="Preventivos" align="center"/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}
                onClick={() => {
                  props.onClick();
                }}
              >
                <ListItemText primary="Ingreso Inventario" align="center"/>
              </ListItemButton>
            </List>
          </Collapse>
    </>
  )
}

export default function SecondaryListItemes(props) {
  return <SecondaryListItems onClick={props.onClick} />
}