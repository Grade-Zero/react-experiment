interface ElementType {
    id: number;
    name: string;
    colour: string;
    selected: boolean;
}

interface Pokemon {
    id: number;
    name: string;
    generation: Object;
    types: Object;
    moves: Object;
    evolutions: Object;
    catch_rate: number;
}

interface Move {
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