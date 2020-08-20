import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import './../../index.css'

function FormCasas({nombre, equipos, lot, opcion, cap}){
    return (
        <>
            <Grid item 
                md={12}>
                <div className="borde espacio casa">
                    {nombre}
                </div>
            </Grid>
            <Grid item 
                md={12}>
                <div className="borde espacio">
                    {equipos}
                </div>
            </Grid>
            <Grid item 
                md={12}>
                <div className="borde espacio">
                    {lot}
                </div>
            </Grid>
            <Grid item 
                md={12}>
                <div className="borde espacio">
                    {opcion}
                </div>
            </Grid>
            <Grid item 
                md={12}>                
                <div className="borde espacio">
                    {`${cap} %`}
                </div>
            </Grid>
        </>
    )
}

FormCasas.propTypes = {
    nombre: PropTypes.string.isRequired,
    equipos: PropTypes.string.isRequired,
    lot: PropTypes.string.isRequired,
    opcion: PropTypes.string.isRequired,
    cap: PropTypes.number.isRequired,
}

export default FormCasas
