var Moves = {
    list: [
        {
            id: 1,
            type_id: 5,
            name: 'Tackle',
            power: 50,
            accuracy: 100,
            pp: 35,
            effects: {
                id: 1,
                type: 'damage',
                target: 'enemy',
                status_effects: false
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
            effects: {
                id: 1,
                type: 'Attack down',
                target: 'enemy',
                status_effects: true,
                stat: 'Atk',
                value: '-1'
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
            effects: {
                id: 1,
                type: 'damage',
                target: 'enemy',
                status_effects: false
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
            effects: {
                id: 1,
                type: 'damage',
                target: 'enemy',
                status_effects: false
            },
            crit_chance: 'high',
            learned_at: {
                type: 'level',
                value: 20
            }
        }
    ]
}

export default Moves
