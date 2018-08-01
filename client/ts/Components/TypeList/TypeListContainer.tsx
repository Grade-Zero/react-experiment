import { connect } from 'react-redux'

import { ListFilter } from './TypeList'
import { RootState } from '../../store';
import { Dispatch } from 'redux';
import { actions } from '../../store/ui/action';

const mapStateToProps = (state: RootState) => ( {
  types: state.types.types
})

// const mapDispatchToProps = (dispatch: Dispatch, ownProps: null) => ({
//   updateTypeId: (typeName: any) => {
//       dispatch(actions.changeTypeName(typeName))
//   }
// })

export type ComponentProps = ReturnType<typeof mapStateToProps>

export default connect(
  mapStateToProps
)(ListFilter)

// mapDispatchToProps

