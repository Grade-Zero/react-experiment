import { combineReducers } from 'redux'
import { TypeActionTypes, Actions, SearchActionTypes } from './action';

const type = (
    state = {
      id: null as null | number,
      name: ''
    },
    action: Actions
  ): typeof state => {
  switch (action.type) {
    case TypeActionTypes.CHANGE_TYPE_ID:
      return {
        ...state,
        id: action.typeId
      }
    case TypeActionTypes.CHANGE_TYPE_NAME:
      return {
        ...state,
        name: action.typeName
      }
    default:
      return state
  }
}


const search = (
    state = {
      term: ''
    },
    action: Actions
  ): typeof state => {
  switch (action.type) {
    case SearchActionTypes.CHANGE_SEARCH_TERM:
      return {
        ...state,
        term: action.searchTerm
      }
    default:
      return state
  }
}

export default combineReducers({
  type,
  search
})