// import { MenuItem } from '../../../../src/models/menu'
// import { ItemCategory } from '../../../../src/models/item';

import { Pokemon as PokemonModel } from '../../store/data/objects'
import { ElementType as ElementTypeModel } from '../../store/data/objects'
import { Move as MoveModel } from './objects'
import { Generation as GenerationModel } from './objects'

export enum PokemonActionTypes {
    SET_POKEMON = 'SET_POKEMON',
    SET_POKEMON_TYPES = 'SET_POKEMON_TYPES',
    SET_POKEMON_MOVES = 'SET_POKEMON_MOVES',
    SET_GENERATIONS = 'SET_GENERATIONS'
}

export const actions = {
    setPokemon : (items: PokemonModel[]) => ({
        type: PokemonActionTypes.SET_POKEMON as PokemonActionTypes.SET_POKEMON,
        pokemon: items
    }),
    setPokemonTypes : (items: ElementTypeModel[]) => ({
        type: PokemonActionTypes.SET_POKEMON_TYPES as PokemonActionTypes.SET_POKEMON_TYPES,
        types: items
    }),
    setPokemonMoves : (items: MoveModel[]) => ({
        type: PokemonActionTypes.SET_POKEMON_MOVES as PokemonActionTypes.SET_POKEMON_MOVES,
        moves: items
    }),
    setGenerations : (items: GenerationModel[]) => ({
        type: PokemonActionTypes.SET_GENERATIONS as PokemonActionTypes.SET_GENERATIONS,
        generations: items
    })
}

export type Actions = ReturnType<typeof actions[keyof typeof actions]>
