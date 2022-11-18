import { 
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Grid,
  Typography,
  Link,
  Container,
  GlobalStyles
} from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorder';
import Nav from './Nav'
function Copyright(props) {

  const url = 'https://jsonplaceholder.typicode.com/todos/1'
  const api_url = 'http://localhost:8088/singin'
  const data = {
    email: "lab22@email.com",
    password: "lab2022"
  }


  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.yunextraffic.com/global/en/">
        Yunex Traffic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const features = [
  {
    title: 'Accesible',
    description: [
      'Facil de usar',
      'Accesible a través de API',
      'Puede usarse en móviles!',
      'Registro y inicio sencillo',
    ],
  },
  {
    title: 'Versatil',
    description: [
      'Compatible con móvil',
      'Puede ejecutarse en local',
      'Multiplataforma',
      'Flexible',
    ],
  },
  {
    title: 'Confiable',
    description: [
      'Seguro por defecto',
      'Cifrado de contraseñas',
      'Permisos por roles',
      'Limitaciones a invitados',
    ],
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Acerca de',
      'Mision, vision y Proposito', 
      'Carrera', 
      'Ferias y eventos',
      'Para proveedores'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 
    'Terms of use'],
  },
];

function FeaturesContent() {
  return (
    <>
    <Nav />
    <br/>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          The Yunex Traffic System
        </Typography>
        <Typography variant="p" align="center" color="text.secondary" component="p">
          Herramienta de software para la administracion y optimizacion de procesos, encargada de ser el aliado numero uno en la ayuda de actividades repetitivas, con el fin de tener un mejor control de los registros de las diversas areas.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {features.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: 'primary.main'
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Container>
          <Grid
            container
            justifyContent="center"
          >
            <Grid
              item
            >
              <Button
                variant="contained"
                size="large"
                sx={{ marginTop: 8 }}
                href="Login"
              >
                Iniciar ahora 
              </Button>
            </Grid>
          </Grid>
        </Container>
    </Container>
     
    </>
  );
}

export default function FeaturesPage() {
  return <FeaturesContent />;
}