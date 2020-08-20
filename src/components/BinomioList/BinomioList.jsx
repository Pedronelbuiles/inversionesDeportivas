import React from 'react'
import { binomios } from './utils'
import Binomio from './../Binomio'
import { Grid } from '@material-ui/core'

const renderGrid = (row) => {
    return <Binomio key={`${row.cuotaCasa}-${row.cuotaGanancia}-${row.cuotaPerdida}`} { ...row } />
}

const BinomioList = () => {
    return (
        <main className="margenAbajo">
            <Grid container
                justify="center"
                alignItems="center">
                <Grid container item
                    xs={12}>
                    <Grid item
                        xs={4}
                        className="tituloCentrado">
                        Cuota de la casa
                    </Grid>
                    <Grid item
                        xs={4}
                        className="tituloCentrado">
                        Cuota ganancias o mayor
                    </Grid>
                    <Grid item
                        xs={4}
                        className="tituloCentrado">
                        Cuota  perdida o menor
                    </Grid>
                </Grid>
                <Grid container item
                    xs={12}>
                    {
                        binomios.map(binomio => renderGrid(binomio))
                    }
                </Grid>
            </Grid>
        </main>
    )
}

export default BinomioList
