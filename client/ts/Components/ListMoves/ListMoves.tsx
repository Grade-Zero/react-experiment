import * as React from 'react'
import * as _ from 'lodash'
import './style.scss'


export class ListMoves extends React.Component<{pkmn_moves: any, moves: any, types: any, count: number}, null> {
    constructor(props: any) {
        super(props)
    }

    render() {
        // return (
        //     _.map(this.props.moves, (base_move, index: number) => {
        //         return (
        //             _.map(this.props.pkmn_moves, (move, m_index: number) => {
        //                 if (move.move_id === base_move.id) {      
        //                     return (                      
        //                         <div key={m_index}>
        //                             <p> - {base_move.name}</p>
        //                             <div className="move-details">                                
        //                                 {_.map(this.props.types, (element, index) => {
        //                                     let moveType = 'Normal'
        //                                     let colour = ''
        //                                     if (base_move.type_id === element.id) {
        //                                         colour = element.colour
        //                                         return (
        //                                             <p key={index}><span>Type: </span><span className="type" style={{background:'#'+colour}}>{element.name}</span></p>
        //                                         )
        //                                     }
        //                                 })}
        //                                 <p><span>Attack: {base_move.power} / Accuracy: {base_move.accuracy} / PP: {base_move.pp}</span></p>
        //                             </div>
        //                         </div>
        //                         // console.log(move.move_id + ' === ' + base_move.id + '(' + base_move.name + ')')
        //                     )
        //                 }
        //             })                   
        //         )
                
        //     })                
        // )
        return (
            _.map(this.props.pkmn_moves, (move, index: number) => {
                return (
                    _.map(this.props.moves, (base_move, index: number) => {
                        if (base_move.id === move.move_id) {
                            return (
                                <div key={index}>
                                    <p> - {base_move.name}</p>
                                    <div className="move-details">                                
                                        {_.map(this.props.types, (element, index) => {
                                            let moveType = 'Normal'
                                            let colour = ''
                                            if (base_move.type_id === element.id) {
                                                colour = element.colour
                                                return (
                                                    <p key={index}><span>Type: </span><span className="type" style={{background:'#'+colour}}>{element.name}</span></p>
                                                )
                                            }
                                        })}
                                        <p><span>Attack: {base_move.power} / Accuracy: {base_move.accuracy} / PP: {base_move.pp}</span></p>
                                    </div>
                                </div>
                            )
                        }
                    })
                )          
            })
        )
    }
}