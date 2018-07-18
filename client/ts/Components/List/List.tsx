import * as React from 'react'
import * as _ from 'lodash'
import './style.scss'
import { ListType } from '../ListType/ListType'
import { ListEvolutions } from '../ListEvolutions/ListEvolutions'
import { ListMoves } from '../ListMoves/ListMoves'

let defaultState = {
    generation: '',
    types: [
        ''
    ]
}

//pokemon: Pokemon[]
export class List extends React.Component<{pokemon: Pokemon[], types: ElementType[], moves: Move[]}, typeof defaultState> {
    constructor(props: any) {
        super(props)
        this.state = defaultState
    }

    createPokemonList() {
        return this.props.pokemon.map((pkmn: Pokemon, index: number) => {
    
            return (
              <li key={index} className="pokemon">
                <ListType pkmn={pkmn} types={this.props.types} />
                <p>
                  <span>Originates from:</span> <span>{pkmn.generation.name}</span>
                </p>

                <div>
                  <p>Moves:</p>
                  <ListMoves pkmn_moves={pkmn.moves} moves={this.props.moves} types={this.props.types} count={index} />
                </div>

                <p>  
                  <span>Evolutions:</span> 
                  <ListEvolutions evolutions={pkmn.evolutions} count={index} />
                </p>
              </li>
            )

        })
    }

    render() {
        return (
            <ul>{this.createPokemonList()}</ul>
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