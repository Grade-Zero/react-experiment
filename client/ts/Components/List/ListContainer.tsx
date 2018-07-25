import { connect } from 'react-redux'

import { List } from './List'
import { RootState } from '../../store';
import { Dispatch } from 'redux';
import { actions } from '../../store/ui/action';

const mapStateToProps = (state: RootState) => ({
    menuItems: state.menu.items,
    searchTerm: state.ui.search.term
})
const mapDispatchToProps = (dispatch: Dispatch, ownProps: null) => ({
    updateCategoryId: (categoryName) => {
        dispatch(actions.changeCategoryName(categoryName))
    }
})

export type ComponentProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
  mapStateToProps,
    mapDispatchToProps
)(MenuItems)
