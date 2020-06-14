import React from 'react';
import '../Pages/Main/Main.scss';

class FeedLogList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='feed_log_list'>
        <a href=''>
          <img src={this.props.url} />
          <p className='feed_log_name'>{this.props.user}</p>
        </a>
      </div>
    );
  }
}

export default FeedLogList;
