import * as React from 'react'
import * as _ from 'lodash'
import './style.scss'
import { ListType } from '../ListType/ListType'
import { ListEvolutions } from '../ListEvolutions/ListEvolutions'

let defaultState = {
    generation: '',
    types: [
        ''
    ]
}

export class List extends React.Component<{data: any, types: any}, typeof defaultState> {
    constructor(props: any) {
        super(props)
        this.state = defaultState
    }

    createPokemonList() {
        return this.props.data.map((pkmn: Object, index: number) => {
        //   this.checkType(job);
        //   if (job.display) {
            return (
              <li key={index} className="pokemon" key={pkmn.id}>
                <ListType pkmn={pkmn} types={this.props.types} />
                <p>
                  <span>Originates from:</span> <span>{pkmn.generation.name}</span>
                </p>

                <div>
                  <p>Moves:</p>
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
                  })}    
                  {/* <span>Moves:</span> <span>{pkmn.moves[0].name}</span> */}
                </div>

                <p>  
                  <span>Evolutions:</span> 
                  <ListEvolutions evolutions={pkmn.evolutions} count={index} />
                </p>
              </li>
            );
        //   } else {
        //     return false;
        //   }
        });
    }

    render() {
        return (
            <ul>{this.createPokemonList()}</ul>
        )
    }
}
