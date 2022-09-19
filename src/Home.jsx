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

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
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
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Texto x
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Texto x mas largo
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {features.map((tier) => (
            // Enterprise card is full width at sm breakpoint
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
              >
                Prueba la herramienta ahora
              </Button>
            </Grid>
          </Grid>
        </Container>
    </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>

        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </>
  );
}

export default function FeaturesPage() {
  return <FeaturesContent />;
}