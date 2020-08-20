import React, { useState, useEffect }  from 'react'
import './styles.css'
import Login from './components/Login'
import Register from './components/Register'
import IndicatorsPage from './pages/IndicatorsPage'
import RegIndiPage from './pages/RegIndiPage'
import AcademiaPage from './pages/AcademiaPage'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Appcontext } from './Appcontext'
import firebase from './components/firebase'

const theme = createMuiTheme()

const App = () => {
    const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		firebase.isInitialized().then(val => {
            setFirebaseInitialized(val)
		})
	})
    return firebaseInitialized !== false ? (
        <Appcontext>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/login' component={Login} />
                        <Route path='/register'  component={Register} />
                        <Route path='/dashboard'  component={AcademiaPage} />
                        <Route path="/indicators" component={IndicatorsPage} />
                        <Route path="/RegIndi" component={RegIndiPage} />
                        <Route path="/academia" component={AcademiaPage} />
                        <Route>
                            Pagina no encontrada
                        </Route>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        </Appcontext>
    ) : <div id="loader"><CircularProgress /></div>
}

export default App
