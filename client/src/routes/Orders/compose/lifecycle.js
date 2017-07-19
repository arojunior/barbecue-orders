import {getProducts} from '../../../modules/Products'

export default {
  componentDidMount() {
    this.props.dispatch(getProducts())
  }
}
