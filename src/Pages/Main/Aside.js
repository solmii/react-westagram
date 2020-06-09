import React from 'react';
import './Main.css';

class Aside extends React.Component {
  render() {
    return (
      <section className='sidebar_container'>
        <div className='main_right'>
          <div className='sidebar_profile'>
            <div className='sidebar_img_radius'>
              <img src={require('../../Images/Main/icon_profile.jpg')} alt='solmii_dev' />
            </div>
            <div className='feed_title_head'>
              <a className='feed_title_main-head' href=''>
                solmii_dev
              </a>
              <a className='feed_title_sub-head sidebar_name' href=''>
                solmi_kang
              </a>
            </div>
          </div>

          <div className='recommend'>
            <div className='recommend_msg'>회원님을 위한 추천</div>
            <div className='view_all'>
              <a href=''>모두 보기</a>
            </div>
          </div>

          <div className='follow'>
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
                  wecode님 외 6명이 팔로우합니다
                </a>
              </div>
              <div className='follow_btn'>
                <button>팔로우</button>
              </div>
            </div>

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
          </div>

          <div className='footer_info'>
            <ul>
              <li>
                <a href=''>소개﹒</a>
                <a href=''>도움말﹒</a>
                <a href=''>홍보 센터﹒</a>
                <a href=''>API﹒</a>
                <a href=''>채용 정보﹒</a>
                <a href=''>개인정보처리방침﹒</a>
                <a href=''>약관﹒</a>
                <a href=''>위치﹒</a>
                <a href=''>인기 계정﹒</a>
                <a href=''>해시태그﹒</a>
                <a href=''>언어</a>
              </li>
            </ul>
          </div>
          <div className='copyright'>© 2020 INSTAGRAM FROM SOLMI</div>
        </div>
      </section>
    );
  }
}

export default Aside;
