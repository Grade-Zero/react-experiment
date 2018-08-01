import React, {Component} from 'react';
import Generations from '../../store/data/generations'
import { ComponentProps } from './TypeListContainer'

import './style.scss';
import _ from 'lodash';

let defaultState = {
    typeVisible: false,
    generationFilterVisible: false,
    typeSelected: false,
    generationSelected: false,
    search: ""    
}

//typeof defaultState | null
// export class ListFilter extends React.Component<{types: ElementType[]}, typeof defaultState> {
export class ListFilter extends React.Component<ComponentProps, null> {
    constructor(props: any) {
        super(props)
        // this.state = defaultState

        // Should be a prop called activeType based on redux, find out why not
        // console.log(this.props.activeType)
        console.log('ListFilter')
        console.log(this.props)
        console.log(this.state)
    }

  componentDidUpdate() {
    // console.log(this.state.search);
  }

//   typeSelect(e, tag) {
//     e.stopPropagation();
//     // this.props.selectType(tag);
//   }
//   generationTypeSelect(e, tag) {
//     e.stopPropagation();
//     // this.props.selectGeneration(tag);
//   }

  typeFilterToggle() {
    this.setState(prevState => ({
    //   jobTypeVisible: !prevState.jobTypeVisible
    }));
  }
  generationFilterToggle() {
    this.setState(prevState => ({
    //   industryFilterVisible: !prevState.industryFilterVisible
    }));
  }

  getTypes() {
    if (this.props.types.length > 0) {
      return this.props.types.map((type) => {
        // let extraStyles = type.name === this.props.activeType ? { backgroundColor: '#f74d3c', color: 'white' } : {}
        let extraStyles = { backgroundColor: '#f74d3c', color: 'white' }
        // return <li key={type.id} className={type.selected ? 'selected' : ''} onClick={(e) => this.checkTagSelection(e, tag)}>{tag.name}</li>
        return <li 
          key={type.id} 
          className={type.selected ? 'selected' : ''}
          style={_.merge({
          }, extraStyles)}>{type.name}</li>
      });
    } else {
      return <li>No Types Available</li>
    }
  }

  getGenerations() {
    if (Generations.list.length > 0) {
      return Generations.list.map((gen) => {
        // return <li key={type.id} className={type.selected ? 'selected' : ''} onClick={(e) => this.checkTagSelection(e, tag)}>{tag.name}</li>
        return <li key={gen.id} className={gen.selected ? 'selected' : ''}>{gen.name}</li>
      });
    } 
    return <li>None</li>
  }

  render() {

    // AFTER MORE REDUX, RETURN CALLING THE FUNCTIONS

    return (
      <ul className="filter-group">
        <li className="search">
          <input type="text" placeholder="Search for a pokemon" />
        </li>

        {/* Need to add click event to show/hide filter-options */}
        {/* <li className="show-filter" onClick={() => this.typeToggle()}> */}
        <li className="show-filter">
          Type
          <ul className="filter-options visible">
            {this.getTypes()}
          </ul>
        </li>

        {/* <li className="show-filter" onClick={() => this.industryFilterToggle()}> */}
        <li className="show-filter">
          Generation
          <ul className="filter-options visible">
            {/* {this.getGenerations()} */}
          </ul>
        </li>

        {/* <li className="reset" onClick={() => this.clearFilters()}>Reset</li> */}
        <li className="reset">Reset</li>
      </ul>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     jobTypes: state.jobs.types,
//     industries: state.jobs.industries,
//     search: state.jobs.search
//   }
// }

// export default connect(mapStateToProps, dispatch => bindActionCreators({
//   clearFilters,
//   selectJobType,
//   selectIndustryType
// }, dispatch))(JobListFilter);
