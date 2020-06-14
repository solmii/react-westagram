import React from 'react';
import '../Pages/Main/Main.scss';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchClick: false,
      searchInput: '',
    };
  }
  searchOnHandler = () => {
    this.setState({ searchClick: true });
  };
  searchOffHandler = () => {
    this.setState({ searchClick: false });
  };
  setSearchHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };
  searchInputRemoveHandler = () => {
    this.setState({
      searchInput: '',
    });
  };
  render() {
    return (
      <div className={this.state.searchClick ? 'search_form_click' : 'search_form'}>
        <img className='search_icon' src={this.state.searchInput ? '' : require('../Images/Main/search.png')} />
        <img className='cancel_icon' src={require('../Images/Main/cancel.png')} onClick={this.searchInputRemoveHandler} />
        <input type='text' placeholder='검색' value={this.state.searchInput} onChange={this.setSearchHandler} onFocus={this.searchOnHandler} onBlur={this.searchOffHandler} />
      </div>
    );
  }
}
export default SearchForm;
