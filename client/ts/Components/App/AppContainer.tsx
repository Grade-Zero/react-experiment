import { connect } from 'react-redux'

import { App } from './App'
import { RootState } from '../../store';
import { Dispatch } from 'redux';
import { actions } from '../../store/data/action';

import { Pokemon as PokemonModel } from '../../store/data/objects'
import { ElementType as ElementTypeModel } from '../../store/data/objects'

import Types from '../../store/data/types'
import Pokemon from '../../store/data/pokemon';
import Moves from '../../store/data/moves'
import Generations from '../../store/data/generations'

const mapStateToProps = (state: RootState) => ( { })

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {item: PokemonModel, types: ElementTypeModel}) => ({
    loadData: async () => {
        // let items = await axios.get('/v1/menu/items')
        dispatch(actions.setPokemon(Pokemon.list))
        // let categories = await axios.get('/v1/menu/categories')
        dispatch(actions.setPokemonTypes(Types.list))
        dispatch(actions.setPokemonMoves(Moves.list))
        dispatch(actions.setGenerations(Generations.list))
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
