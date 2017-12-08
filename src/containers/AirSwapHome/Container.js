import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import queryString from 'query-string';
import { queryTransaction } from 'state/transactions';


const mapStateToProps = ({router, transactions}) => {
  const parsedQueries = router && router.location ? queryString.parse(router.location.search) : {};
  let searchHistory = transactions.searchHistory.filter((key) => key !== parsedQueries.q);

  return {
    activeTransactionQuery: parsedQueries.q,
    allTransactions: (parsedQueries.q && transactions.transactions && transactions.transactions[parsedQueries.q]) || [],
    isTransactionLoading: transactions.isLoading,
    isTransactionError: !!transactions.isError,
    searchHistory: searchHistory,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  queryTransaction,
  changeQueryPage: (query) => push(`/?q=${query}`)
}, dispatch)

export default (Component) => connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
