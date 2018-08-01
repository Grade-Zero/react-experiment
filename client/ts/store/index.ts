import { combineReducers } from 'redux'
import ui from './ui/reducer'
import pokemon from './data/reducer'
import types from './data/reducer'

// import Pokemon from './data/pokemon';
// import Types from './data/types';

let reducers = {
    ui,
    pokemon,
    types
}

export type RootState = {
    [P in keyof typeof reducers]: ReturnType<typeof reducers[P]>
}

export default combineReducers(reducers)