var Pokemon = {
    list: [
      {
        id: 1,
        name: 'Bulbasaur',
        generation: {
            id: 1,
            name: 'kanto'
        },
        types: [
            {
                id: 1,
                type_id: 1,
                name: 'grass'
            },
            {
                id: 2,
                type_id: 10,
                name: 'poison'
            }
        ],
        moves: [
            {
                id: 1,
                move_id: 1
            },
            {
                id: 2,
                move_id: 3
            }
        ],
        evolutions: [
            {
                id: 1,
                pokemon_id: 1,
                name: 'Bulbasaur',
                image: '',
                type: 'self',
                method: {
                    id: 1,
                    type: 'level',
                    value: 1
                }
            },
            {
                id: 2,
                pokemon_id: 2,
                name: 'Ivysaur',
                image: '',
                type: 'evolution',
                method: {
                    id: 1,
                    type: 'level',
                    value: 16
                }
            }, 
            {
                id: 3,
                pokemon_id: 3,
                name: 'Venusaur',
                image: '',
                type: 'evolution',
                method: {
                    id: 1,
                    type: 'level',
                    value: 32
                }
            },
            {
                id: 4,
                pokemon_id: 3,
                name: 'Mega Venusaur',
                image: '',
                type: 'evolution',
                method: {
                    id: 1,
                    type: 'mega',
                    value: 'Venusaurite'
                }
            }
        ],
        catch_rate: 45
      }, {
        id: 2,
        name: 'Ivysaur',
        generation: {
            id: 1,
            name: 'kanto'
        },
        types: [
            {
                id: 1,
                type_id: 1,
                name: 'grass'
            },
            {
                id: 2,
                type_id: 10,
                name: 'poison'
            }
        ],
        moves: [
            {
                id: 1,
                move_id: 1
            },
            {
                id: 2,
                move_id: 3
            }
        ],
        evolutions: [
            {
                id: 1,
                pokemon_id: 1,
                name: 'Bulbasaur',
                image: '',
                type: 'pre',
                method: {
                    id: 1,
                    type: 'breed',
                    value: ''
                }
            }, 
            {
                id: 2,
                pokemon_id: 2,
                name: 'Ivysaur',
                image: '',
                type: 'self',
                method: {
                    id: 1,
                    type: 'level',
                    value: '16'
                }
            }, 
            {
                id: 3,
                pokemon_id: 3,
                name: 'Venusaur',
                image: '',
                type: 'evolution',
                method: {
                    id: 1,
                    type: 'level',
                    value: 32
                }
            },
            {
                id: 4,
                pokemon_id: 3,
                name: 'Mega Venusaur',
                image: '',
                type: 'evolution',
                method: {
                    id: 1,
                    type: 'mega',
                    value: 'Venusaurite'
                }
            }
        ],
        catch_rate: 45
      }, {
        id: 3,
        name: 'Venusaur',
        generation: {
            id: 1,
            name: 'kanto'
        },
        types: [
            {
                id: 1,
                type_id: 1,
                name: 'grass'
            },
            {
                id: 2,
                type_id: 10,
                name: 'poison'
            }
        ],
        moves: [
            {
                id: 1,
                move_id: 1
            },
            {
                id: 2,
                move_id: 3
            },
            {
                id: 3,
                move_id: 4
            }
        ],
        evolutions: [
            {
                id: 1,
                pokemon_id: 1,
                name: 'Bulbasaur',
                image: '',
                type: 'pre',
                method: {
                    id: 1,
                    type: 'pre',
                    value: ''
                }
            }, 
            {
                id: 2,
                pokemon_id: 2,
                name: 'Ivysaur',
                image: '',
                type: 'pre',
                method: {
                    id: 1,
                    type: 'pre',
                    value: '16'
                }
            },
            {
                id: 3,
                pokemon_id: 3,
                name: 'Venusaur',
                image: '',
                type: 'self',
                method: {
                    id: 1,
                    type: 'level',
                    value: '32'
                }
            },
            {
                id: 4,
                pokemon_id: 3,
                name: 'Mega Venusaur',
                image: '',
                type: 'evolution',
                method: {
                    id: 1,
                    type: 'mega',
                    value: 'Venusaurite'
                }
            }
        ],
        catch_rate: 45
      }
    ]
  }
  
  export default Pokemon;
  