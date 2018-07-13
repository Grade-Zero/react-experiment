import * as React from 'react'

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
            <div className='app_container'>
                <h3>Greetings</h3>
            </div>
        )
    }
}
