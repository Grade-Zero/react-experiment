import { combineReducers } from 'redux'
import { PokemonActionTypes, Actions } from './action';

import { Pokemon as PokemonModel } from '../../store/data/objects'
import { ElementType as ElementTypeModel } from '../../store/data/objects'

const pokemon = (
    state = [] as PokemonModel[],
    action: Actions
    ): typeof state => {
    switch (action.type) {
      case PokemonActionTypes.SET_POKEMON:
        return action.pokemon
      default:
        return state
    }
}

const types = (
    state = [] as ElementTypeModel[],
    action: Actions
    ): typeof state => {
    switch (action.type) {
      case PokemonActionTypes.SET_POKEMON_TYPES:
        return action.types
      default:
        return state
    }
}

export default combineReducers({
  pokemon,
  types
})