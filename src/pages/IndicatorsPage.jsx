import React, { useEffect } from 'react'
import firebase from '../components/firebase'
import { withRouter } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import IndicatorList from './../components/IndicatorList'
import { useAcaDispatchContext, useAcaStateContext } from './../Appcontext'
import AppFrame from './../components/AppFrame'

const IndicatorsPage = (props) => {
    const data = useAcaStateContext()
    let actions = useAcaDispatchContext()
    useEffect(() => {
		const setIndicadores = async () => {
            if (data.Indicators.length === 0) {
                const dataf = await firebase.getIndicadores().then(datos => {return datos})
                actions({ type: 'SET_INDICATORS', payload: dataf })
                console.log("datos desde firebase", dataf)
            }
		}
		setIndicadores()
		
    }, [actions, data])
    
    if(!firebase.getCurrentUsername()) {		
		alert('Please login first')
		props.history.replace('/login')
		return null
	}
    return (
        <AppFrame>
            <Paper className="Indicadores">
                <IndicatorList indicadores={data.Indicators} />
            </Paper>
        </AppFrame>
    )
}

export default withRouter(IndicatorsPage)