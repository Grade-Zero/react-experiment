import * as React from 'react'
import * as _ from 'lodash'
import './style.scss'

import { ComponentProps } from './ListEvolutionsContainer';

export class ListEvolutions extends React.Component<{evolutions: any, count: number}, null> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            _.map(this.props.evolutions, (evo, index: number) => {
                console.log('count prop: ' + this.props.count)
                let className = ''
                if (evo.type === 'self') {
                    className = 'evo-self'
                }
                
                let after = '=>'
                if (index < this.props.count) {
                    after = '<='
                }
                return (
                  <span key={index} className={className}>{evo.name} {(index + 1) < this.props.evolutions.length ? (after) : ''}</span>
                )
            })
        )
    }
}