import { connect } from 'react-redux'

import { App } from './App'
import { RootState } from '../../store';
import { Dispatch } from 'redux';
import { actions } from '../../store/data/action';

import Types from '../../store/data/types'
import Pokemon from '../../store/data/pokemon';
import Moves from '../../store/data/moves'

const mapStateToProps = (state: RootState) => ( { })

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {item: Pokemon}) => ({
    loadData: async () => {
        // let items = await axios.get('/v1/menu/items')
        dispatch(actions.setPokemon(Pokemon.list))
        // let categories = await axios.get('/v1/menu/categories')
        dispatch(actions.setPokemonTypes(Types.list))
    }
})

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         loadData: () => dispatch(actions.setPokemon(Pokemon.list))
//     }
// }

export type ComponentProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
