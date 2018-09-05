import { connect } from 'react-redux'

import { List } from './List'
import { RootState } from '../../store';
import { Dispatch } from 'redux';
import { actions } from '../../store/ui/action';

import { Pokemon as PokemonModel } from '../../store/data/objects'
import { ElementType as ElementTypeModel } from '../../store/data/objects'
import { Move as MoveModel } from '../../store/data/objects'

const mapStateToProps = (state: RootState) => ( {
    pokemon: state.pokemon.pokemon,
    types: state.types.types,
    moves: state.moves.moves,
    activeType: state.ui.type.id,
    activeGeneration: state.ui.generation.id,
    activePokemon: state.ui.pokemon.id
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: null) => ({
    updateSelectedTypeId: (typeId: any) => {
        dispatch(actions.changeSelectedTypeId(typeId))
    }
})

// const mapDispatchToProps = (dispatch: Dispatch, ownProps: {item: PokemonModel, type: ElementTypeModel, move: MoveModel}) => ({
//     // loadData: async () => {
//     //     // let items = await axios.get('/v1/menu/items')
//     //     dispatch(actions.setPokemon(Pokemon.list))
//     //     // let categories = await axios.get('/v1/menu/categories')
//     //     dispatch(actions.setPokemonTypes(Types.list))
//     // }
// })

export type ComponentProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
    mapStateToProps,
    null
)(List)
