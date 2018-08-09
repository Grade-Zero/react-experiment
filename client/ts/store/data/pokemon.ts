var Pokemon = {
    list: [
      {
        id: 1,
        name: 'Bulbasaur',
        generation: {
            id: 1,
            name: 'kanto'
        },
        pokedex: {
            national: 1
        },
        types: [
            {
                id: 1,
                type_id: 1,
                name: 'grass'
            },
            {
                id: 10,
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
        pokedex: {
            national: 2
        },
        types: [
            {
                id: 1,
                type_id: 1,
                name: 'grass'
            },
            {
                id: 10,
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
        pokedex: {
            national: 3
        },
        types: [
            {
                id: 1,
                type_id: 1,
                name: 'grass'
            },
            {
                id: 10,
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
      }, {
        id: 4,
        name: 'Houndoom',
        generation: {
            id: 2,
            name: 'johto'
        },
        pokedex: {
            national: 229
        },
        types: [
            {
                id: 3,
                type_id: 3,
                name: 'fire'
            },
            {
                id: 14,
                type_id: 14,
                name: 'dark'
            }
        ],
        moves: [
            {
                id: 1,
                move_id: 5,
                learned_at: {
                    type: 'level',
                    value: 50
                }
            },
            {
                id: 2,
                move_id: 6,
                learned_at: {
                    type: 'tm',
                    value: 97
                }
            }
        ],
        evolutions: [
            {
                id: 1,
                pokemon_id: 0,
                name: 'Houndour',
                image: '',
                type: 'pre',
                method: {
                    id: 1,
                    type: 'level',
                    value: ''
                }
            },
            {
                id: 2,
                pokemon_id: 4,
                name: 'Houndoom',
                image: '',
                type: 'self',
                method: {
                    id: 1,
                    type: 'level',
                    value: 24
                }
            },
            {
                id: 3,
                pokemon_id: 3,
                name: 'Mega Houndoom',
                image: '',
                type: 'evolution',
                method: {
                    id: 1,
                    type: 'mega',
                    value: 'Houndoomite'
                }
            }
        ],
        catch_rate: 45
      }, {
        id: 5,
        name: 'Starmie',
        generation: {
            id: 1,
            name: 'kanto'
        },
        pokedex: {
            national: 121
        },
        types: [
            {
                id: 2,
                type_id: 2,
                name: 'water'
            },
            {
                id: 13,
                type_id: 13,
                name: 'psychic'
            }
        ],
        moves: [
            {
                id: 1,
                move_id: 7,
                learned_at: {
                    type: 'level',
                    value: 50
                }
            },
            {
                id: 2,
                move_id: 8,
                learned_at: {
                    type: 'tm',
                    value: 29
                }
            }
        ],
        evolutions: [
            {
                id: 1,
                pokemon_id: 0,
                name: 'Staryu',
                image: '',
                type: 'pre',
                method: {
                    id: 1,
                    type: 'level',
                    value: ''
                }
            },
            {
                id: 2,
                pokemon_id: 5,
                name: 'Starmie',
                image: '',
                type: 'self',
                method: {
                    id: 1,
                    type: 'item',
                    value: 'water stone'
                }
            }
        ],
        catch_rate: 45
      }, {
        id: 6,
        name: 'Archeops',
        generation: {
            id: 5,
            name: 'unova'
        },
        pokedex: {
            national: 567
        },
        types: [
            {
                id: 8,
                type_id: 8,
                name: 'rock'
            },
            {
                id: 6,
                type_id: 6,
                name: 'flying'
            }
        ],
        moves: [
            {
                id: 1,
                move_id: 9,
                learned_at: {
                    type: 'level',
                    value: 18
                }
            },
            {
                id: 2,
                move_id: 10,
                learned_at: {
                    type: 'level',
                    value: 28
                }
            }
        ],
        evolutions: [
            {
                id: 1,
                pokemon_id: 0,
                name: 'Archen',
                image: '',
                type: 'pre',
                method: {
                    id: 1,
                    type: 'level',
                    value: ''
                }
            },
            {
                id: 2,
                pokemon_id: 6,
                name: 'Archeops',
                image: '',
                type: 'self',
                method: {
                    id: 1,
                    type: 'level',
                    value: 37
                }
            }
        ],
        catch_rate: 45
      }
    ]
  }
  
  export default Pokemon;
  