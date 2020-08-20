import React from 'react'
import RegIndicator from './../components/RegIndicator'
import firebase from '../components/firebase'
import AppFrame from './../components/AppFrame'
import { withRouter } from 'react-router-dom'

const RegIndiPage = (props) => {
    if(!firebase.getCurrentUsername()) {		
		alert('Please login first')
		props.history.replace('/login')
		return null
	}
    return (
        <AppFrame>
            <RegIndicator />
        </AppFrame>
    )
}

export default withRouter(RegIndiPage)