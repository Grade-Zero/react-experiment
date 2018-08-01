import { connect } from 'react-redux'

import { ListEvolutions } from './ListEvolutions'
import { RootState } from '../../store';
import { Dispatch } from 'redux';
import { actions } from '../../store/ui/action';

import { Pokemon as PokemonModel } from '../../store/data/objects'
import { ElementType as ElementTypeModel } from '../../store/data/objects'

// const mapStateToProps = (state: RootState) => ({
//     pokemon: state.pokemon,
// })
const mapStateToProps = (state: RootState, ownProps: {evolutions: any, count: number}) => (
    {
        ...ownProps,
    }
)

const mapDispatchToProps = (dispatch: Dispatch, ownProps: null) => ({
    
})

export type ComponentProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
  mapStateToProps,
    mapDispatchToProps
)(ListEvolutions)
