import * as React from 'react'
import * as _ from 'lodash'
import './style.scss'


export class ListType extends React.Component<{pkmn: any, types: any}, null> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div className="list-header">
                <div className="list-header-name">
                    <h1>{this.props.pkmn.name}</h1>
                </div>
            {/* <span>{pkmn.types[0].name}</span> */}
                <div className="list-header-sub">
                    {_.map(this.props.pkmn.types, (type, index) => {
                        let colour = ''
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