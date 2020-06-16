import React from 'react';
import FollowProfile from '../../Components/FollowProfile';
import './Main.scss';

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
            <FollowProfile img='https://ca.slack-edge.com/TH0U6FBTN-U011AUSB0F3-08311e7f4074-512' alt='sumin' name='who_stephHan' follow='회원님을 팔로우합니다' />
            <FollowProfile img={'https://ca.slack-edge.com/TH0U6FBTN-U011AUS7533-265849714a79-512'} art={'yongin'} name={'yongineer1990'} follow={'회원님을 팔로우합니다'} />
            <FollowProfile img={'https://ca.slack-edge.com/TH0U6FBTN-U011AUSAMED-e77e219111eb-512'} art={'daehwi'} name={'daehwiii'} follow={'kdg21님 외 523명이 팔로우합니다'} />
            <FollowProfile img={'https://ca.slack-edge.com/TH0U6FBTN-U011AUS40D7-5cf4faa84d71-512'} art={'gwangoh'} name={'gwang5'} follow={'회원님을 팔로우합니다'} />
            <FollowProfile img={'https://ca.slack-edge.com/TH0U6FBTN-U011AUS5BEV-db2c02c328d0-512'} art={'donggeon'} name={'kdg21'} follow={'회원님을 팔로우합니다'} />
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
