import { combineReducers } from 'redux'
import { TypeActionTypes, Actions, SearchActionTypes } from './action';
import Types from '../data/types'
import { ElementType } from '../data/objects';


// const type = (
//     state = {
//       types: Types.list as ElementType[],
//       selectedType: null
//     },
//     action: Actions
//   ): typeof state => {
//   switch (action.type) {
//     case TypeActionTypes.CHANGE_SELECTED_TYPE:
//       return {
//         ...state,
//         selectedType: action.type
//       }
//     // case TypeActionTypes.CHANGE_TYPE_NAME:
//     //   return {
//     //     ...state,
//     //     name: action.typeName
//     //   }
//     default:
//       return state
//   }
// }

const type = (
    state = {
      id: null as null | number,
    },
    action: Actions
  ): typeof state => {
  switch (action.type) {
    case TypeActionTypes.CHANGE_SELECTED_TYPE_ID:
      return {
        ...state,
        id: action.typeId
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
