import { combineReducers } from 'redux'
import ui from './ui/reducer'

let reducers = {
    ui
}

export type RootState = {
    [P in keyof typeof reducers]: ReturnType<typeof reducers[P]>
}

export default combineReducers(reducers)