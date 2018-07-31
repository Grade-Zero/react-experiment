import { combineReducers } from 'redux'
import ui from './ui/reducer'
import pokemon from './data/reducer'

import Pokemon from './data/pokemon';

let reducers = {
    ui,
    pokemon
}

export type RootState = {
    [P in keyof typeof reducers]: ReturnType<typeof reducers[P]>
}

export default combineReducers(reducers)