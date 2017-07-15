import {connect} from 'react-redux'
import {compose, withHandlers, withProps} from 'recompose'

import LoginContainer from './Container'
import {sendLogin} from '../../modules/Login/actions'

const styles = {
  container: {
    marginTop: '40px'
  }
}

export default compose(
  connect(state => state.Login),
  withProps({
    styles
  }),
  withHandlers({
    handleSubmit: props => values => props.dispatch(sendLogin(values))
  })
)(LoginContainer)
