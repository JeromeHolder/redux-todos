import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions'
import Link from '../components/Link'

// Uses ownProps that are received from Footer.js
// Basically says that whatever the filter applied from Footer that matches the visibilityFilter in redux state is active
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

// Brings in the setVisibilityFilter and maps it to an onClick that's passed into Link
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink