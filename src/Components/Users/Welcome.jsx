import { useTheme } from '@mui/material/styles';
import Title from './Title';
import { Container,Typography } from '@mui/material'

export default function Chart() {
  const theme = useTheme();

  return (
    <>
      <Container>
      <Title>Bienvenido</Title>
        <p> {false? 'Rol ya asignado':'Usted se encuentra desahabilitado hasta que administrador le asigne un rol. Tenga en cuenta que podra visualizar los formularios, sin embargo no podra editarlos. Cuando ya se le haya asignado su rol, se activaran los formulario que usted podra manipular.'}</p>
      </Container>
    </>
  );
}