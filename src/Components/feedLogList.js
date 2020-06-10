import React from 'react';
import '../Pages/Main/Main.css';

class feedLogList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='feed_log_list'>
        <a href=''>
          <img src={require('../Images/Main/feed_log_img1.jpg')} />
          <p className='feed_log_name'>{this.props.user}</p>
        </a>
      </div>
    );
  }
}

export default feedLogList;
