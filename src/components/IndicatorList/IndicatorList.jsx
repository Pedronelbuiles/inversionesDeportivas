import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { List, Grid, Link } from '@material-ui/core'
import Indicator from './../Indicator'

function renderIndicadores(indicador){
    return <Indicator className="List" key={`${indicador.deporte}-${indicador.tipo}-${indicador.fecha}-${indicador.hora}-${indicador.casa1Data.nombre}-${indicador.casa2Data.nombre}-${indicador.paf}`} 
                { ...indicador }/>
}



function IndicatorList({indicadores}){
    const [deportes, setDeportes] = useState(true)
    const [forex, setForex] = useState(false)
    const [binario, setBinario] = useState(false)

    function showBody(body){
        setDeportes(false)
        setForex(false)
        setBinario(false)
        switch (body) {
            case "Deportes":
                setDeportes(true)
                break;
            case "Forex":
                setForex(true)
                break;
            case "Binario":
                setBinario(true)
                break;
            default:
                break;
        }
    }
    return (
        <main>
            <Grid container
                xs={12}
                justify="center"
                alignItems="center">
                <Grid container item xs={12}>
                    <Grid item xs={4} className="btn-indi-op" >
                        <Link href="#" onClick={() => {showBody("Deportes")}} color="inherit">Deportes</Link>
                    </Grid>
                    <Grid item xs={4} className="btn-indi-op" >
                        <Link href="#" onClick={() => {showBody("Forex")}} color="inherit">Forex</Link>
                    </Grid>
                    <Grid item xs={4} className="btn-indi-op" >
                        <Link href="#" onClick={() => {showBody("Binario")}} color="inherit">Binario</Link>
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    { 
                        deportes && 
                        <List className="List">
                            {
                                indicadores.map(indicador => renderIndicadores(indicador))
                            }
                        </List>
                    }
                    {
                        forex &&
                        (`Espacio para señales de Forex`)
                    }
                    {
                        binario &&
                        (`Espacio para señales de Binarios`)
                    }
                </Grid>
            </Grid>
        </main>
    )
}

IndicatorList.propTypes = {
    indicadores: PropTypes.array,
}

export default IndicatorList
