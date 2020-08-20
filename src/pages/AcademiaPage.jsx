import React, { useEffect } from 'react'
import AppFrame from './../components/AppFrame'
import Academia from './../components/Academia'
import firebase from '../components/firebase'
import { withRouter } from 'react-router-dom'
import { useAcaStateContext, useAcaDispatchContext } from '../Appcontext'

const AcademiaPage = props => {
    const data = useAcaStateContext()
    let actions = useAcaDispatchContext()
    useEffect(() => {					
		const setIndicadores = async () => {            
            if (data.Acc.Permissions === undefined) {
                const dataf = await firebase.getUserData().then(datos => {return datos})
                actions({ type: 'SET_USER_DATA', payload: dataf })
                console.log("datos desde firebase", dataf)			
            }
		}
		setIndicadores()
		
    }, [actions, data])
    if(!firebase.getCurrentUsername()) {		
		props.history.replace('/login')
		return null
    }    
    return (
        <>
        {   data.Acc.Permissions &&
             <AppFrame>
                <Academia />
            </AppFrame>
        }
        </>
    )
}

export default withRouter(AcademiaPage)