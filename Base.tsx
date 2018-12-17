import * as _ from 'lodash'
import * as React from 'react'
import { Loading } from '../Loading/Loading'
import debounce from 'lodash.debounce'

const defaultState = {
    wine: null,
    loading: false,
    more: {
        text: '',
    }
}

export class Base extends React.Component<null, typeof defaultState> {

    constructor(props: any) {
        super(props)
        this.state = defaultState

        this.timer = null;

        this.onChangeDebounced = debounce(this.onChangeDebounced, 1500);
    }

    timer = setTimeout(() => {
        console.log('what');
    });

    handleCheck = () => {
        console.log('handleCheck, clearTimeout');
        // Clears running timer and starts a new one each time the user types
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          console.log('timeout expired');
          this.toggleCheck();
        }, 1000);
    }

    onChange = (e) => {
        this.setState({
            more: {
            text: e.target.value
            }
        });

        this.onChangeDebounced(e);
    };

    onChangeDebounced = (e) => {
        // Delayed logic goes here
        console.log('onchange debounced');
        this.toggleCheck();
    }

    toggleCheck = () => {
        console.log('toggleCheck');
        this.setState( prevState => ({ loading: !prevState.loading }));
    }

    public render() {
        return (
            this.state.loading ?
            (<Loading />) :
            (
                <div>
                    input value={this.state.more.text} onChange={this.onChange} placeholder="Start typing..." /><br/>
                    <label>
                        <input type='checkbox' checked={this.state.loading} onChange={this.toggleCheck} />
                        Toggle checkbox after user stops typing for 1 second
                    </label>
                    {(this.state.more.text.length < 6 && this.state.loading) &&
                        <p>Incomplete!</p>
                    }
                </div>
            )
        )
    }
}
