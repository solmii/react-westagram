import React from 'react';
import '../Pages/Main/Main.css';

class FeedBtn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <button>
          <svg width='24' height='24' viewBox='0 0 48 48'>
            <path d={this.props.path} />
          </svg>
        </button>
      </li>
    );
  }
}
export default FeedBtn;
