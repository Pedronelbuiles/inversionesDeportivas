import React, { useReducer, useContext } from 'react'

const AcaStateContext = React.createContext()
const AcaDispatchContext = React.createContext()

const initialValue = {
    Acc:{},
    Indicators:[],
    SegOpe:[]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_INDICATORS':
            const indicators = action.payload
            const newIndicators = [ ...state.Indicators, ...indicators ]
            return { ...state, Indicators: newIndicators }
        case 'SET_USER_DATA':
            const userData = action.payload
            const newUserData = { ...state.Acc, ...userData }
            return { ...state, Acc: newUserData }
        default:
            return state
    }
}

const Appcontext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)    
    return (
        <AcaDispatchContext.Provider value={dispatch}>
            <AcaStateContext.Provider value={state}>
                {children}                
            </AcaStateContext.Provider>
        </AcaDispatchContext.Provider>
    )
}

const useAcaDispatchContext = () => {
    const dispatch = useContext(AcaDispatchContext)
    if (!dispatch) {
        throw Error("Must set dispatch provider")
    }
    return dispatch
}

const useAcaStateContext = () => {
    const state = useContext(AcaStateContext)    
    if (!state) {
        throw Error("Must set state provider")
    }
    return state
}

export {
    Appcontext, useAcaDispatchContext, useAcaStateContext
}