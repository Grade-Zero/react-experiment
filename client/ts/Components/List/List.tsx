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
            console.log(this.props.activeType)
            console.log('type match ' + typeMatch)
            return (                
                typeMatch ? 
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

    render() {
        console.log('List component')
        return (<ul>{this.createPokemonList()}</ul>)
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