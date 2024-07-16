import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

// Slices
import Overview from './slices/Overview';
import globalState from './slices/globalState';
import CensusandPopulation from './slices/CensusandPopulation';
import BuisnessAnalytics from './slices/BuisnessAnalytics';


// const reducer = combineReducers({
//     "Overview" : Overview,
//     "global" : globalState
// })

const store = configureStore({
    reducer: {
        "Overview": Overview,
        "CensusandPopulation": CensusandPopulation,
        "BuisnessAnalytics": BuisnessAnalytics,
        "global": globalState

    }
})

export default store;