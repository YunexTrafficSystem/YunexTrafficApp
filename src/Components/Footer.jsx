import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Container from '@mui/material/Container'

  /**
 * Footer o pie de pagina del sistema con datos relacionados a la empresa
 * @author Katerine Ospina <ospinakaterine4@gmail.com>
 * @returns {ReactComponent} - Footer con funcionalidad en ButtonIcons
 */

export default function LabelBottomNavigation() {
  const [value, setValue] = useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{display: 'flex', flexFlow: 'column', height: '100%'}}>
    <BottomNavigation sx={{ position: 'fixed', bottom: 0, minWidth: '100%', minHeight: '1vh' }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction 
      label="Folder" 
      value="folder" 
      icon={<FolderIcon />} 
      />
    </BottomNavigation>
    </Container>
  );
}
