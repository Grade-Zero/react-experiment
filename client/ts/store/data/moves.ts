var Moves = {
    list: [
        {
            id: 1,
            type_id: 5,
            name: 'Tackle',
            power: 50,
            accuracy: 100,
            pp: 35,
            type: 'physical',
            effects: {
                id: 1,
                type: 'damage',
                target: 'enemy',
                status_effects: [],
                status_chance: 0
            },
            crit_chance: 'normal',
            learned_at: {
                type: 'level',
                value: 1
            }
        },
        {
            id: 2,
            type_id: 5,
            name: 'Growl',
            power: 0,
            accuracy: 100,
            pp: 40,
            type: 'status',
            effects: {
                id: 1,
                type: 'Attack down',
                target: 'enemy',
                status_effects: [
                    {
                        stat: 'Atk',
                        value: '-1'
                    }
                ],
                status_chance: 0                
            },
            crit_chance: 'none',
            learned_at: {
                type: 'level',
                value: 1
            }
        },
        {
            id: 3,
            type_id: 1,
            name: 'Vine Whip',
            power: 45,
            accuracy: 100,
            pp: 25,
            type: 'physical',
            effects: {
                id: 1,
                type: 'damage',
                target: 'enemy',
                status_effects: [],
                status_chance: 0
            },
            crit_chance: 'normal',
            learned_at: {
                type: 'level',
                value: 10
            }
        },
        {
            id: 4,
            type_id: 1,
            name: 'Razor Leaf',
            power: 55,
            accuracy: 95,
            pp: 25,
            type: 'physical',
            effects: {
                id: 1,
                type: 'damage',
                target: 'enemy',
                status_effects: [],
                status_chance: 0
            },
            crit_chance: 'high',
            learned_at: {
                type: 'level',
                value: 20
            }
        },
        {
            id: 5,
            type_id: 3,
            name: 'Flamethrower',
            power: 90,
            accuracy: 100,
            pp: 15,
            type: 'special',
            effects: {
                id: 1,
                type: 'damage',
                target: 'enemy',
                status_effects: [],
                status_chance: 0
            },
            crit_chance: 'normal',
            learned_at: {
                type: 'level',
                value: 50
            }
        },
        {
            id: 6,
            type_id: 14,
            name: 'Dark Pulse',
            power: 80,
            accuracy: 100,
            pp: 15,
            type: 'special',
            effects: {
                id: 1,
                type: 'damage',
                target: 'enemy',
                status_effects: [],
                status_chance: 0
            },
            crit_chance: 'normal',
            learned_at: {
                type: 'tm',
                value: 97
            }
        },
        {
            id: 7,
            type_id: 2,
            name: 'Hydro Pump',
            power: 120,
            accuracy: 100,
            pp: 5,
            type: 'special',
            effects: {
                id: 1,
                type: 'damage',
                target: 'enemy',
                status_effects: [],
                status_chance: 0
            },
            crit_chance: 'normal',
            learned_at: {
                type: 'level',
                value: 50
            }
        },
        {
            id: 8,
            type_id: 13,
            name: 'Psychic',
            power: 90,
            accuracy: 100,
            pp: 10,
            type: 'special',
            effects: {
                id: 1,
                type: 'damage',
                target: 'enemy',
                status_effects: [],
                status_chance: 0
            },
            crit_chance: 'normal',
            learned_at: {
                type: 'level',
                value: 50
            }
        },
        {
            id: 9,
            type_id: 8,
            name: 'Ancient Power',
            power: 60,
            accuracy: 100,
            pp: 5,
            type: 'special',
            effects: {
                id: 1,
                type: 'damage',
                target: 'enemy',
                status_effects: [
                    {
                        stat: 'Atk',
                        value: '+1'
                    },
                    {
                        stat: 'Def',
                        value: '+1'
                    },
                    {
                        stat: 'Spd',
                        value: '+1'
                    },
                    {
                        stat: 'SpAtk',
                        value: '+1'
                    },
                    {
                        stat: 'SpDef',
                        value: '+1'
                    }
                ],
                status_chance: 10
            },
            crit_chance: 'normal',
            learned_at: {
                type: 'level',
                value: 18
            }
        },
        {
            id: 10,
            type_id: 6,
            name: 'Acrobatics',
            power: 55,
            accuracy: 100,
            pp: 15,
            type: 'special',
            effects: {
                id: 1,
                type: 'damage',
                target: 'enemy',
                status_effects: [
                    {
                        stat: 'power',
                        value: '*2'
                    }
                ],
                status_chance: 0,
                status_requirement: {
                    held_item: null
                }
            },
            crit_chance: 'normal',
            learned_at: {
                type: 'level',
                value: 20
            }
        },
    ]
}

export default Moves
