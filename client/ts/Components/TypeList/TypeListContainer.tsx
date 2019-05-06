import { connect } from 'react-redux'

import { ListFilter } from './TypeList'
import { RootState } from '../../store';
import { Dispatch } from 'redux';
import { actions } from '../../store/ui/action';

const mapStateToProps = (state: RootState) => ( {
  types: state.types.types,
  generations: state.generations.generations,
  activeType: state.ui.type.id,
  activeGeneration: state.ui.generation.id
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: null) => ({
  updateSelectedTypeId: (typeId: any) => {
      dispatch(actions.changeSelectedTypeId(typeId))
  },
  clearSelectedTypeId: () => {
      dispatch(actions.clearSelectedTypeId())
  },
  updateSelectedGenerationId: (genId: any) => {
    dispatch(actions.changeSelectedGenerationId(genId))
  },
  clearSelectedGenerationId: () => {
    dispatch(actions.clearSelectedGenerationId())
  },
})

export type ComponentProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListFilter)

// mapDispatchToProps

