import { combineReducers } from 'redux'
import { PokemonActionTypes, Actions } from './action';


const pokemon = (
    state = [] as Pokemon[],
    action: Actions
    ): typeof state => {
    switch (action.type) {
      case PokemonActionTypes.SET_POKEMON:
        return action.pokemon
      default:
        return state
    }
}

export default combineReducers({
  pokemon
})