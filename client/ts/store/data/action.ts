// import { MenuItem } from '../../../../src/models/menu'
// import { ItemCategory } from '../../../../src/models/item';

import { Pokemon as PokemonModel } from '../../store/data/objects'
import { ElementType as ElementTypeModel } from '../../store/data/objects'

export enum PokemonActionTypes {
    SET_POKEMON = 'SET_POKEMON',
    SET_POKEMON_TYPES = 'SET_POKEMON_TYPES',
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
}

export type Actions = ReturnType<typeof actions[keyof typeof actions]>
