export interface ElementType {
    id: number;
    type_id: number;
    name: string;
    colour: string;
    selected: boolean;
}

export interface Pokemon {
    id: number;
    name: string;
    generation: Generation;
    pokedex: Pokedex;
    types: ElementType[];
    moves: Object;
    evolutions: Object;
    catch_rate: number;
}

export interface Move {
    id: number;
    name: string;
    power: number;
    accuracy: number;
    pp: number;
    effects: Object;
    crit_chance: string;
    learned_at: Object;
}

interface Evolution {
    id: number;
    pokemon_id: number;
    name: string;
    image: string;
    type: string;
    method: Object;
}

export interface Generation {
    id: number;
    name: string;
    selected: Boolean;
}

export interface Pokedex {
    national: number;
}