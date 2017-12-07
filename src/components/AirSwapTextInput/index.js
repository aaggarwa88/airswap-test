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
    if (activeTransactionQuery) {
      this.props.queryTransaction(activeTransactionQuery)
      .catch((e) => {
        // alert(e);
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.activeTransactionQuery !== this.props.activeTransactionQuery) {
      this.setState({value: nextProps.activeTransactionQuery})
      if(nextProps.activeTransactionQuery) {
        this.search(nextProps.activeTransactionQuery)
      }
    }
  }
  search(value = this.state.value) {
    const { queryTransaction, changeQueryPage } = this.props;
    this.props.queryTransaction(value).then(() => {
      changeQueryPage(value);
    }).catch((e) => {
      // alert(e);
    })
  }
  render() {
    const { activeTransactionQuery, searchHistory, changeQuery, isTransactionError, isTransactionLoading } = this.props;
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
          onKeyPress: (e) => e.key == 'Enter' ? this.search() : null,
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
