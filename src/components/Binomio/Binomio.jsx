import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

const Binomio = ({cuotaCasa, cuotaGanancia, cuotaPerdida}) => {
    return (
        <>
            <Grid item
                xs={4}
                className="borde txtCentro">
                {cuotaCasa}
            </Grid>
            <Grid item 
                xs={4}
                className="borde txtCentro">
                {cuotaGanancia}
            </Grid>
            <Grid item 
                xs={4}
                className="borde txtCentro">
                {cuotaPerdida}
            </Grid>
        </>
    )
}

Binomio.propTypes = {
    cuotaCasa: PropTypes.string.isRequired,
    cuotaGanancia: PropTypes.string.isRequired,
    cuotaPerdida: PropTypes.string.isRequired,
}

export default Binomio
