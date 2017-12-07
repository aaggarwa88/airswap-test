import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { queryPrice} from 'state/airswapPrice';

const mapStateToProps = ({airswapPrice}) => {
  return {
    price: airswapPrice.price,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  queryPrice,
}, dispatch)

export default (Component) => connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
