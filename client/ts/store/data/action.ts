// import { MenuItem } from '../../../../src/models/menu'
// import { ItemCategory } from '../../../../src/models/item';

export enum PokemonActionTypes {
    SET_POKEMON = 'SET_POKEMON',
    SET_POKEMON_TYPES = 'SET_POKEMON_TYPES',
}

export const actions = {
    setPokemon : (items: Pokemon[]) => ({
        type: PokemonActionTypes.SET_POKEMON as PokemonActionTypes.SET_POKEMON,
        pokemon: items
    }),
    // setMenuCategories : (categories: ItemCategory[]) => ({
    //     type: MenuItemsActionTypes.SET_MENU_CATEGORIES as MenuItemsActionTypes.SET_MENU_CATEGORIES,
    //     categories: categories
    // }),
}

export type Actions = ReturnType<typeof actions[keyof typeof actions]>
