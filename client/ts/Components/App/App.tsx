import * as React from 'react'
import { Provider } from 'react-redux';

import { List } from '../List/List'
import { ListFilter } from '../TypeList/TypeList'
import TypeListContainer from '../TypeList/TypeListContainer'

import Types from '../../store/data/types'
import Pokemon from '../../store/data/pokemon';
import Moves from '../../store/data/moves'


let defaultState = {
    pokemon: [],
    types: [],
    moves: [],
    generations: []
}

// const Types = <Element[]>require('../../store/data/types')

export class App extends React.Component<null, typeof defaultState> {
    constructor(props: any) {
        super(props)
        this.state = defaultState

        console.log(Moves)
    }

    render() {
        return (
            <div className="App">

                <header className="header">
                    <div className="col">
                        <div className="logo">
                            <h1><span>RM</span>Reactmon</h1>
                        </div>  
                    </div>
                </header>

                <div className="listings">
                    <div className="col">
                        <div className="list">
                            <List pokemon={Pokemon.list} types={Types.list} moves={Moves.list} />
                        </div>
                        <div className="filters">
                            {/* <ListFilter types={Types.list} /> */}
                            <TypeListContainer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
