import React from 'react';
import Uploadcomment from '../../Components/Uploadcomment';
import FeedLogList from '../../Components/FeedLogList';
import HeartBtn from '../../Components/HeartBtn';
import FeedBtn from '../../Components/FeedBtn';
import './Main.css';

class Article extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='feeds_container'>
        <div className='feed_log'>
          <FeedLogList url={require('../../Images/Main/feed_log_img1.jpg')} user='Anna' />
          <FeedLogList url={require('../../Images/Main/feed_log_img2.jpg')} user='Becky' />
        </div>

        <div className='feed'>
          <div className='feed_title'>
            <div className='title_img_radius'>
              <img alt='solmii_dev' src={require('../../Images/Main/icon_profile.jpg')} />
            </div>
            <div className='feed_title_head'>
              <a className='feed_title_main-head' href=''>
                solmii_dev
              </a>
              <a className='feed_title_sub-head' href=''>
                WeWork at Seolleung II
              </a>
            </div>
            <button></button>
          </div>
          <div className='feed_img'>
            <img alt='wecode' src={require('../../Images/Main/feed_main.JPG')} />
          </div>

          <div className='feed_icons'>
            <div>
              <ul>
                <li>
                  <HeartBtn width='24' height='24' />
                </li>
                <FeedBtn path='M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z' />
                <FeedBtn path='M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z' />
              </ul>
            </div>
            <div>
              <img src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png' alt='bookmark' />
            </div>
          </div>

          <div className='feed_comments'>
            <div className='feed_like'>
              <img
                src='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Bj3WvVLmBYAAX_EHiGC&oh=d81e5bbacfadeb11cf773cc7c6a3650d&oe=5F004B70'
                alt='>WECODE'
              />
              <span>
                <a className='comment_id' href=''>
                  wecode_bootcamp
                </a>
                님
                <a className='comment_id' href=''>
                  외 32,356명
                </a>
                이 좋아합니다
              </span>
            </div>

            <div className='feed_description'>
              <p>
                <a className='comment_tag' href=''>
                  #Wecode
                </a>
                에서 치맥🐔🍺
                <a className='comment_tag' href=''>
                  #infinity팀
                </a>
                짱👍
              </p>
            </div>

            <div className='more_comment'>
              <a href='#'>댓글 4개 모두 보기</a>
            </div>

            <Uploadcomment />
          </div>
        </div>
      </section>
    );
  }
}

export default Article;
