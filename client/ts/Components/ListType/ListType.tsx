import * as React from 'react'
import * as _ from 'lodash'
import './style.scss'

import { ComponentProps } from './ListTypeContainer';
import { Pokemon as PokemonModel } from '../../store/data/objects'
import { ElementType as ElementTypeModel } from '../../store/data/objects'

export class ListType extends React.Component<{pkmn: PokemonModel, types: ElementTypeModel[]}, null> {
// export class ListType extends React.Component<ComponentProps, null> {
    constructor(props: any) {
        super(props)
        console.log('ListType')
        console.log(this.props)
    }

    render() {
        return (
            <div className="list-header">
                <div className="list-header-name">
                    {/* <h1>{this.props.pokemon.pokemon[0].name}</h1> */}
                    <h1>{this.props.pkmn.name}</h1>
                </div>
            {/* <span>{pkmn.types[0].name}</span> */}
                <div className="list-header-sub">
                    {_.map(this.props.pkmn.types, (type, index) => {
                        let colour = ''
                        console.log('ListType - Types')
                        console.log(this.props.types)
                        console.log('active pokemon type')
                        console.log(type)
                        _.map(this.props.types, (element, index) => {
                            if (element.id == type.type_id) {
                                colour = '#'+element.colour
                            }
                        })
                        return (
                            <span key={index} className="type" style={{background:colour}}>{type.name}</span>
                        )
                    })} 
                </div>
            </div>
        )
    }
}