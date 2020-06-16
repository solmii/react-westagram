import React from 'react';
import '../Pages/Main/Main.scss';
import cancel_icon from '../Images/Main/cancel.png';
import search_icon from '../Images/Main/search.png';

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
      searchClick: false,
    });
  };
  render() {
    return (
      <div className='search_container' onFocus={this.searchOnHandler} onBlur={this.searchOffHandler}>
        <button onClick={this.searchInputRemoveHandler}>
          <img className='cancel_icon' src={!this.state.searchClick ? '' : cancel_icon} />
        </button>
        <div className={this.state.searchClick ? 'search_form_click' : 'search_form'}>
          <img className='search_icon' src={this.state.searchInput ? '' : search_icon} />
          <input type='text' placeholder='검색' value={this.state.searchInput} onChange={this.setSearchHandler} />
        </div>
      </div>
    );
  }
}
export default SearchForm;
