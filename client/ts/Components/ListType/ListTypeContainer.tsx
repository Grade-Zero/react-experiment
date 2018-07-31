import { connect } from 'react-redux'

import { ListType } from './ListType'
import { RootState } from '../../store';
import { Dispatch } from 'redux';
import { actions } from '../../store/ui/action';

const mapStateToProps = (state: RootState) => ({
    pokemon: state.pokemon,
})
const mapDispatchToProps = (dispatch: Dispatch, ownProps: null) => ({
    // updateCategoryId: (categoryId: number) => {
    //     dispatch(actions.changeCategoryId(categoryId))
    // }
})

export type ComponentProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
  mapStateToProps,
    mapDispatchToProps
)(ListType)
