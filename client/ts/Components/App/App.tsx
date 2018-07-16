import * as React from 'react'
import { List } from '../List/List'
import { ListFilter } from '../TypeList/TypeList'

import Types from '../../store/data/types'
import Pokemon from '../../store/data/pokemon';

let defaultState = {
    category: 'Specials'
}

export class App extends React.Component<null, typeof defaultState> {
    constructor(props: any) {
        super(props)
        this.state = defaultState
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

                <h3>Greetings</h3>
                <div className="listings">
                    <div className="col">
                        <div className="list">
                            <List data={Pokemon.list} types={Types.list} />
                        </div>
                        <div className="filters">
                            <ListFilter types={Types.list} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
