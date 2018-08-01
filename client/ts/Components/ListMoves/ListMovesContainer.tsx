import { connect } from 'react-redux'

import { ListMoves } from './ListMoves'
import { RootState } from '../../store';
import { Dispatch } from 'redux';

import { Move as MoveModel } from '../../store/data/objects'

// const mapStateToProps = (state: RootState) => ({
//     pokemon: state.pokemon,
// })
const mapStateToProps = (state: RootState, ownProps: {pkmnMoves: any, count: number}) => (
    {
        ...ownProps,
        types: state.types.types,
        moves: state.moves.moves
    }
)

const mapDispatchToProps = (dispatch: Dispatch, ownProps: null) => ({
    
})

export type ComponentProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
  mapStateToProps,
    mapDispatchToProps
)(ListMoves)
