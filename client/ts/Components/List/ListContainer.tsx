import { connect } from 'react-redux'

import { List } from './List'
import { RootState } from '../../store';
import { Dispatch } from 'redux';
import { actions } from '../../store/data/action';

import Types from '../../store/data/types'
import Pokemon from '../../store/data/pokemon';
import Moves from '../../store/data/moves'

import { Pokemon as PokemonModel } from '../../store/data/objects'

const mapStateToProps = (state: RootState) => ( {
    pokemon: state.pokemon.pokemon,
    types: state.types.types
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: {item: PokemonModel, type: ElementTypeModel}) => ({
    // loadData: async () => {
    //     // let items = await axios.get('/v1/menu/items')
    //     dispatch(actions.setPokemon(Pokemon.list))
    //     // let categories = await axios.get('/v1/menu/categories')
    //     dispatch(actions.setPokemonTypes(Types.list))
    // }
})

export type ComponentProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
    mapStateToProps,
    null
)(List)
