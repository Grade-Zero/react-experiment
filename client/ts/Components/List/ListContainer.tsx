import * as _ from 'lodash'
import { connect } from 'react-redux'

import { List } from './List'
import { RootState } from '../../store';
import { Dispatch } from 'redux';
import { actions } from '../../store/data/action';

import Types from '../../store/data/types'
import Pokemon from '../../store/data/pokemon';
import Moves from '../../store/data/moves'

// const mapStateToProps = (state: RootState) => ({
//     pokemon: state.Pokemon.list,
//     types: state.Types.list,
//     moves: state.moves.list
// })
// const mapDispatchToProps = (dispatch: Dispatch, ownProps: null) => ({
//     updateCategoryId: (categoryName) => {
//         dispatch(actions.changeCategoryName(categoryName))
//     }
// })

const mapStateToProps = (state: RootState) => ( { })

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {item: Pokemon}) => ({
    loadMenu: async () => {
        let pokemon = Pokemon.list
        dispatch(actions.setPokemon(pokemon))
        // let categories = await axios.get('/v1/menu/categories')
        // dispatch(actions.setMenuCategories(categories.data.data))
    }
})

export type ComponentProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
