import * as React from 'react'
import * as _ from 'lodash'
import './style.scss'
import { ListType } from '../ListType/ListType'
import ListTypeContainer from '../ListType/ListTypeContainer'
import { ListEvolutions } from '../ListEvolutions/ListEvolutions'
import ListEvolutionsContainer from '../ListEvolutions/ListEvolutionsContainer'
import { ListMoves } from '../ListMoves/ListMoves'
import ListMovesContainer from '../ListMoves/ListMovesContainer'

import { ComponentProps } from './ListContainer';
import { Pokemon as PokemonModel, ElementType } from '../../store/data/objects'

let defaultState = {
    generation: '',
    loading: true
}

//pokemon: Pokemon[]
export class List extends React.Component<ComponentProps, typeof defaultState> {
    constructor(props: any) {
        super(props)
        this.state = defaultState
    }

    // componentWillMount() {
    //     this.setState({loading: true}, () => {
    //         this.props.loadData()
    //         this.setState({loading: false})
    //         console.log(this.props)
    //     })
    // }

    createPokemonList() {
        return this.props.pokemon.map((pkmn: PokemonModel, index: number) => {
            // WHEN REDUX IS IN AND FIXED, RETURN THE COMPONENT CALLS
            let typeMatch: Boolean = false
            let genMatch: Boolean = false
            !_.isNil(this.props.activeType) ? 
                (pkmn.types.map((type: ElementType, dex: number) => {
                    console.log('type ' + dex + ' - ' + type.name + '(' + type.type_id + ')')
                    type.type_id === this.props.activeType ?
                    (
                        typeMatch = true
                    ) : 
                    ( console.log('no match') )
                })) : 
                (
                    typeMatch = true
                )      
            !_.isNil(this.props.activeGeneration) ? 
                (
                    pkmn.generation.id === this.props.activeGeneration ? 
                    (
                        genMatch = true
                    ) : 
                    (   
                        console.log('no generation match')
                    )
                ) :
                (
                    genMatch = true
                )

            // If types aren't selected this will pass regardless, all pokemon stay even if generation is selected
            return (                
                typeMatch || genMatch ? 
                (
                    <li key={index} className="pokemon">
                        {/* <ListType pkmn={pkmn} types={this.props.types} /> */}
                        <ListTypeContainer pkmn={pkmn} types={this.props.types} />
                        <p>
                        <span>Originates from:</span> <span>{pkmn.generation.name}</span>
                        </p>
                        <p>
                            <span>Pokedex #</span> <span>{pkmn.pokedex.national}</span>
                        </p>

                        <div>
                        <p>Moves:</p>
                        {/* <ListMoves pkmn_moves={pkmn.moves} moves={this.props.moves} types={this.props.types} count={index} /> */}
                        <ListMovesContainer pkmnMoves={pkmn.moves} count={index} />
                        </div>

                        <p>  
                        <span>Evolutions:</span> 
                        {/* <ListEvolutions evolutions={pkmn.evolutions} count={index} /> */
                        <ListEvolutionsContainer evolutions={pkmn.evolutions} count={index} />}
                        </p>
                    </li>
                ) : 
                (
                    <li key={index}></li>
                )
            )

        })
    }

    showActivePokemon() {
        let selected: PokemonModel | null = null

        // !_.isNil(this.props.activePokemon) ?
        //     (this.props.pokemon.map((pkmn: PokemonModel, index: number) => {
        //         if (pkmn.id === this.props.activePokemon.id) {
        //             selected = pkmn
        //         }
        //     })
        //     <div>
        //         <h2>{selected.name}</h2>
        //     </div> 
        // ) :
        // ( 
        //     <div>
        //         <h2>Oi</h2>
        //     </div>
        // ) 

        if (!_.isNil(this.props.activePokemon)) {
            (this.props.pokemon.map((pkmn: PokemonModel, index: number) => {
                if (pkmn.id === this.props.activePokemon.id) {
                    selected = pkmn
                    return (
                        <div>
                            <h2>{selected.name}</h2>
                        </div>
                    )
                }
                return (
                    <div>
                        <h3>Nothing to see here</h3>
                    </div>
                )
            }))
        } else {
            <div>
                <h2>Oi</h2>
            </div>
        }
        return (
            <h2>Oi</h2>
        )
    }

    render() {
        console.log('List component')
        return (
            <ul>
                {this.createPokemonList()}
                {this.showActivePokemon()}
            </ul>
        )
    }
}




{/* 
Old moves output, was within this component, now in its own
    
{_.map(pkmn.moves, (move, index) => {
    return (
    <div key={index}>
        <p> - {move.name}</p>
        <div className="move-details">                                
            {_.map(this.props.types, (element, index) => {
                let moveType = 'Normal'
                let colour = ''
                if (move.type_id === element.id) {
                    colour = element.colour
                    return (
                        <p key={index}><span>Type: </span><span className="type" style={{background:'#'+colour}}>{element.name}</span></p>
                    )
                }
            })}
            <p><span>Attack: {move.power} / Accuracy: {move.accuracy} / PP: {move.pp}</span></p>
        </div>
    </div>
    )
    console.log(move)
})}     */}