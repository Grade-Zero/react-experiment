import { combineReducers } from 'redux'
import { PokemonActionTypes, Actions } from './action';

import { Pokemon as PokemonModel } from '../../store/data/objects'
import { ElementType as ElementTypeModel } from '../../store/data/objects'
import { Move as MoveModel } from './objects'
import { Generation as GenerationModel } from './objects'

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

const moves = (
  state = [] as MoveModel[],
  action: Actions
  ): typeof state => {
  switch (action.type) {
    case PokemonActionTypes.SET_POKEMON_MOVES:
      return action.moves
    default:
      return state
  }
}

const generations = (
  state = [] as GenerationModel[],
  action: Actions
  ): typeof state => {
  switch (action.type) {
    case PokemonActionTypes.SET_GENERATIONS:
      return action.generations
    default:
      return state
  }
}

export default combineReducers({
  pokemon,
  types,
  moves,
  generations
})