import React from 'react';
import '../Pages/Main/Main.scss';

class FollowProfile extends React.Component {
  render() {
    const { img, art, name, follow } = this.props;
    return (
      <div className='follow_profile'>
        <div className='title_img_radius'>
          <img src={img} alt={art} />
        </div>
        <div className='follow_form'>
          <a className='feed_title_main-head' href=''>
            {name}
          </a>
          <a className='feed_title_sub-head sidebar_name' href=''>
            {follow}
          </a>
        </div>
        <div className='follow_btn'>
          <button>팔로우</button>
        </div>
      </div>
    );
  }
}
export default FollowProfile;
