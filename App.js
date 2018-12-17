import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import debounce from 'lodash.debounce';

class App extends Component {

  constructor() {
    super();
    this.state = {
      more: {
        text: "",
      },
      text: '',
      checked: false
    };
    this.timer = null;

    this.onChangeDebounced = debounce(this.onChangeDebounced, 1500);
  }

  // Uncomment handleCheck calls to do some debouncing without lodash
  componentDidUpdate (prevProps, prevState) {
    if(prevState.text !== this.state.text) {
      // this.handleCheck();
    }

    if (prevState.more !== this.state.more) {
      console.log("states are different");
      // this.handleCheck();
      console.log(prevState.more);
      console.log(this.state.more);
    } else {
      console.log(prevState);
      console.log(this.state);
    }
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
    console.log("onchange debounced");
    this.toggleCheck();
  }
  
  handleCheck = () => {
    console.log("handleCheck, clearTimeout");
    // Clears running timer and starts a new one each time the user types
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      console.log("timeout expired");
      this.toggleCheck();
    }, 1000);
  }
  
  toggleCheck = () => {
    console.log("toggleCheck");
    this.setState( prevState => ({ checked: !prevState.checked }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <input value={this.state.more.text} onChange={this.onChange} placeholder="Start typing..." /><br/>
        <label>
          <input type="checkbox" checked={this.state.checked} onChange={this.toggleCheck} />
          Toggle checkbox after user stops typing for 1 second
        </label>
        {(this.state.more.text.length < 6 && this.state.checked) &&
          <p>Incomplete!</p>
        }
      </div>
    );
  }
}

export default App;
