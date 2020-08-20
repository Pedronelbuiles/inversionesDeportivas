import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper, ListItem } from '@material-ui/core'
import FormCasas from './FormCasas'

function Indicator({deporte, tipo, fecha, hora, casa1Data, casa2Data, paf}){
    return (
        <ListItem className="List">        
            <Paper elevation={15} className="List">
                <Grid container 
                    justify="center"
                    alignItems="center">
                    <Grid item 
                        className="centrado"
                        md={6}
                        xs={12}
                        >
                        <div className="espArriba">
                            {deporte}
                        </div>
                    </Grid>
                    <Grid item 
                        className="centrado"
                        md={6}
                        xs={12}
                        >
                        <div className="espArriba">
                            {tipo}
                        </div>
                    </Grid>
                    <Grid item 
                        className="centrado borde espacio"
                        md={6}
                        xs={12}
                        >
                        {fecha}
                    </Grid>
                    <Grid item 
                        className="centrado borde espacio"
                        md={6}
                        xs={12}
                        >
                        {hora}
                    </Grid>
                    <Grid item 
                        className="centrado"
                        md={6}
                        xs={12}
                        >
                        <FormCasas { ...casa1Data } />
                    </Grid>
                    <Grid item 
                        className="centrado"
                        md={6}
                        xs={12}
                        >
                        <FormCasas { ...casa2Data } />
                    </Grid>
                    { paf > 0 ? (<Grid item xs={12} className="centrado bordeV espAbajo verde">{`${paf} %`}</Grid>) : (<Grid item xs={12} className="centrado bordeR espAbajo rojo">{`${paf} %`}</Grid>)}
                </Grid>
            </Paper>
        </ListItem>
    )
}

Indicator.propTypes = {
    deporte: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
    casa1Data: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        equipos: PropTypes.string.isRequired,
        lot: PropTypes.string.isRequired,
        opcion: PropTypes.string.isRequired,
        cap: PropTypes.number.isRequired,
    }).isRequired,
    casa2Data: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        equipos: PropTypes.string.isRequired,
        lot: PropTypes.string.isRequired,
        opcion: PropTypes.string.isRequired,
        cap: PropTypes.number.isRequired,
    }).isRequired,
    paf:PropTypes.number.isRequired,
}

export default Indicator
