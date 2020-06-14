import React from 'react';
import '../Pages/Main/Main.scss';

class FollowProfile extends React.Component {
  render() {
    return (
      <div className='follow_profile'>
        <div className='title_img_radius'>
          <img
            src='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Bj3WvVLmBYAAX_EHiGC&oh=d81e5bbacfadeb11cf773cc7c6a3650d&oe=5F004B70'
            alt='>WECODE'
          />
        </div>
        <div className='follow_form'>
          <a className='feed_title_main-head' href=''>
            wecode_bootcamp
          </a>
          <a className='feed_title_sub-head sidebar_name' href=''>
            회원님을 팔로우합니다
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
