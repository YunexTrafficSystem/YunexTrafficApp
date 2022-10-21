import { Typography, Grid } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function FinalStep() {
    return (
        <>
        <div
            style={{ 
                fontSize: 210,
                display: "flex",
                justifyContent: "center",
            }}>
                <CheckCircleIcon  
                color="primary" 
                sx={{ fontSize: 210 }}/>
        </div> 
                <Typography variant="p" component="p" fontSize={30}
                sx={{
                    margin:"10px 0",
                    display: "flex",
                    justifyContent: "center",
                }}>
                    Correcto
                </Typography>
                <Typography variant="subtitle1" component="p"  align="center" 
                sx={{
                    margin:"10px 0",
                    display: "flex",
                }}>
                    Se han completado los datos satisfactoriamente
                </Typography>
                <Typography variant="subtitle1" component="p" align="center"
                sx={{
                    margin:"10px 0",
                    display: "flex",
                }}>
                    Haga clic en el boton de Reset para volver al inicio
                </Typography>
                </>
    )
}

export { FinalStep }