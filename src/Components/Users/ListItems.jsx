import { useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import AssignmentIcon from '@mui/icons-material/Assignment'
import HandymanIcon from '@mui/icons-material/Handyman'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw'
import EngineeringIcon from '@mui/icons-material/Engineering'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn'




function MainListItems(props) {
  return (
    <>
      <ListItemButton
      onClick={() => {
        props.onClick(1);
      }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton
      onClick={() => {
        props.onClick(2);
      }}
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItemButton>
    </>
  )
}

function SecondaryListItems(props) {
  const [lab, setLab] = useState(false)
  const handleLab = () => {
    const NewOpen = !lab
    setLab(NewOpen)
  }
  const [terreno, setTerreno] = useState(false)
  const handleTerreno = () => {
    const NewOpen = !terreno
    setTerreno(NewOpen)
  }
  const [ehs, setEhs] = useState(false)
  const handleEhs = () => {
    const NewOpen = !ehs
    setEhs(NewOpen)
  }
  return (
    <>
      <ListSubheader component="div" inset>
        Formularios
      </ListSubheader>
      <ListItemButton onClick={handleLab}>
        <ListItemIcon>
          <BuildCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Laboratorio" />
        {lab ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={lab} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}
          onClick={() => {
            props.onClick(3);
          }}
          >
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Eléctrico" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}
          onClick={() => {
            props.onClick(4);
          }}
          >
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Electrónico" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleTerreno}>
        <ListItemIcon>
          <ElectricRickshawIcon />
        </ListItemIcon>
        <ListItemText primary="Mantenimiento" />
        {terreno ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={terreno} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}
          onClick={() => {
            props.onClick(5);
          }}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Terreno" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton
      onClick={() => {
        props.onClick(6);
      }}
      >
        <ListItemIcon>
          <HandymanIcon />
        </ListItemIcon>
        <ListItemText primary="Ensambles" />
      </ListItemButton>
      <ListItemButton
      onClick={() => {
        props.onClick(7);
      }}
      >
        <ListItemIcon>
          <AssignmentReturnIcon />
        </ListItemIcon>
        <ListItemText primary="Garantias" />
      </ListItemButton>
      <ListItemButton onClick={handleEhs}>
        <ListItemIcon>
          <EngineeringIcon />
        </ListItemIcon>
        <ListItemText primary="EHS" />
        {ehs ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={ehs} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}
          onClick={() => {
            props.onClick(8);
          }}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Datos Personales" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}
          onClick={() => {
            props.onClick(9);
          }}
          >
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Preoperacionales" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}
          onClick={() => {
            props.onClick(10);
          }}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Preventivos" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}
          onClick={() => {
            props.onClick(11);
          }}
          >
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Ingreso Inventario" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  )
}

export {
  SecondaryListItems,
  MainListItems
}
export default function MainListItemes(props) {
  return <MainListItems onClick={props.onClick} />,
 <SecondaryListItems onClick={props.onClick} />;
}