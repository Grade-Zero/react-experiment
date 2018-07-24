import { connect } from 'react-redux'

import { ListFilter } from './TypeList'
import { RootState } from '../../store';

const mapStateToProps = (state: RootState) => ({
  activeType: state.ui.type.name
})

export type ComponentProps = ReturnType<typeof mapStateToProps>

export default connect(
  mapStateToProps
)(ListFilter)
