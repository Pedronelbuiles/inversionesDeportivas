import React, { useState } from 'react'
import { WiAlien } from 'react-icons/wi'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel, Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import { styles } from './util'
import firebase from '../firebase'
import Indicator from './../Indicator'
import { useAcaDispatchContext } from './../../Appcontext'

const RegIndicator = props => {    
    const { classes } = props
    const actions = useAcaDispatchContext()
    
    const [deporte, setDeporte] = useState('')
    const [tipo, setTipo] = useState('')
    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [casa1, setCasa1] = useState('')
    const [equipos1, setEquipos1] = useState('')    
    const [lot1, setLot1] = useState('')
    const [opcion1, setOpcion1] = useState('')
    const [cap1, setCap1] = useState(0)
    const [casa2, setCasa2] = useState('')
    const [equipos2, setEquipos2] = useState('')
    const [lot2, setLot2] = useState('')
    const [opcion2, setOpcion2] = useState('')
    const [cap2, setCap2] = useState(0)
    const [paf, setPaf] = useState(0)    

    const indicator = {
        deporte,
        tipo,
        fecha,
        hora,
        casa1Data:{
            nombre:casa1,
            equipos:equipos1,
            lot:lot1,
            opcion:opcion1,
            cap:cap1 
        },
        casa2Data:{
            nombre:casa2,
            equipos:equipos2,
            lot:lot2,
            opcion:opcion2,
            cap:cap2 
        },
        paf
     }

	if(!firebase.getCurrentUsername()){
        props.history.replace('/dashboard')
        return null
    }

    return (
        <Grid container
            justify="center"
            alignItems="center">
            <Grid item
            xs={12}
            md={5}
            className="espFormIndicator">
            <main className={classes.main}>                
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <WiAlien />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register Indicator
                    </Typography>
                    <form className={classes.form} onSubmit={e => e.preventDefault() && false }>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="deporte">Deporte</InputLabel>
                            <Input id="deporte" name="deporte" autoComplete="off" autoFocus value={deporte} onChange={e => setDeporte(e.target.value)} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="tipo">Instancia</InputLabel>
                            <Input id="tipo" name="tipo" autoComplete="off" value={tipo} onChange={e => setTipo(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="fecha">fecha</InputLabel>
                            <Input name="fecha" id="fecha" autoComplete="off" value={fecha} onChange={e => setFecha(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="hora">Hora</InputLabel>
                            <Input name="hora" type="text" id="hora" autoComplete="off" value={hora} onChange={e => setHora(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="casa1">Nombre casa 1</InputLabel>
                            <Input name="casa1" type="text" id="casa1" autoComplete="off" value={casa1} onChange={e => setCasa1(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="equipos1">Equipos</InputLabel>
                            <Input name="equipos1" type="text" id="equipos1" autoComplete="off" value={equipos1} onChange={e => setEquipos1(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="lot1">Liga o torneo</InputLabel>
                            <Input name="lot1" type="text" id="lot1" autoComplete="off" value={lot1} onChange={e => setLot1(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="opcion1">Opción</InputLabel>
                            <Input name="opcion1" type="text" id="opcion1" autoComplete="off" value={opcion1} onChange={e => setOpcion1(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="cap1">Cuota a pagar</InputLabel>
                            <Input name="cap1" type="number" id="cap1" autoComplete="off" value={cap1} onChange={e => setCap1(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="casa2">Nombre casa 2</InputLabel>
                            <Input name="casa2" type="text" id="casa2" autoComplete="off" value={casa2} onChange={e => setCasa2(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="equipos2">Equipos</InputLabel>
                            <Input name="equipos2" type="text" id="equipos2" autoComplete="off" value={equipos2} onChange={e => setEquipos2(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="lot2">Liga o torneo</InputLabel>
                            <Input name="lot2" type="text" id="lot2" autoComplete="off" value={lot2} onChange={e => setLot2(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="opcion2">Opción</InputLabel>
                            <Input name="opcion2" type="text" id="opcion2" autoComplete="off" value={opcion2} onChange={e => setOpcion2(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="cap2">Cuota a pagar</InputLabel>
                            <Input name="cap2" type="number" id="cap2" autoComplete="off" value={cap2} onChange={e => setCap2(e.target.value)}  />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="paf">Porcentaje a favor</InputLabel>
                            <Input name="paf" type="number" id="paf" autoComplete="off" value={paf} onChange={e => setPaf(e.target.value)}  />
                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={onRegister}
                            className={classes.submit}>
                            Register
                        </Button>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to="/login"
                            className={classes.submit}>
                            Go back to Login
                        </Button>
                    </form>
                </Paper>
            </main>
        </Grid>
        <Grid item
            xs={12}
            md={7}>
                <div className="margenYtamano">
                    {renderIndicator()}
                </div>
        </Grid>
    </Grid>
)

    async function onRegister() {
		try {
            let dataf = await firebase.getIndicadores().then(datos => {return datos})
            dataf.unshift(indicator)
            firebase.addIndicadores(dataf)
            actions({ type: 'SET_INDICATORS', payload: [] })
            props.history.push('/indicators')
		} catch(error) {
			alert(error.message)
		}
    }
    
    function renderIndicator(){
        return <Indicator { ...indicator } />
    }
}

export default withRouter(withStyles(styles)(RegIndicator))
