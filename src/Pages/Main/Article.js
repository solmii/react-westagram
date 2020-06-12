import React from 'react';
import Uploadcomment from '../../Components/Uploadcomment';
import FeedLogList from '../../Components/FeedLogList';
import './Main.css';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: 'Wecoder',
      comment: '',
    };
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
                  <a href=''>
                    <img src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png' alt='♥' />
                  </a>
                  <a href=''>
                    <img src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png' alt='👄' />
                  </a>
                  <a href=''>
                    <svg width='24' height='24' viewBox='0 0 48 48'>
                      <path d='M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z' />
                    </svg>
                  </a>
                </li>
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
