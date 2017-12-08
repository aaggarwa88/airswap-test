/**
 * @class AirSwapTextInput
 * @description Main Search component for AirSwap test
 */

import React from 'react'
import Autocomplete from 'react-autocomplete'

import styles from './styles.css';
import loader from 'assets/loader.gif'

const loaderBg = {'background-image': `url(${loader})`}

class AirSwapTextInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: props.activeTransactionQuery,
      focus: false,
    }
  }

  componentDidMount() {
    const { activeTransactionQuery } = this.props;
    // If the url has a search query, than call query action
    if (activeTransactionQuery) {
      this.props.queryTransaction(activeTransactionQuery)
      .catch((e) => {
        alert(e);
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    // If the query has changed, than update state and try making query
    if(nextProps.activeTransactionQuery !== this.props.activeTransactionQuery) {
      window.scrollTo(0, 0);
      this.setState({value: nextProps.activeTransactionQuery})
      if(nextProps.activeTransactionQuery) {
        this.search(nextProps.activeTransactionQuery)
      }
    }
  }
  search(value = this.state.value) {
    const { changeQueryPage } = this.props;
    this.props.queryTransaction(value).then(() => {
      // the query is valid, than update URL
      changeQueryPage(value);
    }).catch((e) => {
      // alert(e);
    })
  }
  render() {
    const {  searchHistory, isTransactionError, isTransactionLoading } = this.props;
    const { value } = this.state;

    const loadingStyle = isTransactionLoading ? styles.loading : styles.notLoading;
    const errorStyle = isTransactionError ? styles.error : '';

    return(
      <Autocomplete
        getItemValue={(item) => item}
        ref={(input) => { this.autoCompleteInput = input; }}
        items={searchHistory}
        open={this.state.focus && !!searchHistory.length}
        wrapperStyle={{width: '100%'}}
        inputProps={{
          className: `${styles.input} ${loadingStyle} ${errorStyle}`,
          placeholder: 'Enter an Ether Transaction Address',
          style: loaderBg,
          onKeyPress: (e) => e.key === 'Enter' ? this.search() : null,
          onFocus: () => this.setState({ focus: true }),
          onBlur: () => this.setState({ focus: false })
        }}
        renderItem={(item, isHighlighted) =>
          <div className={styles.autocompleteItem} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item}
          </div>
        }
        value={value}
        onChange={(event, value) => this.setState({ value })}
        onSelect={value => {
          this.setState({ value })
          this.search(value);
        }}
      />
    )
  }
}

export default AirSwapTextInput
