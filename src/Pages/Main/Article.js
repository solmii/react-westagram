import React from 'react';
import Uploadcomment from '../../Components/Uploadcomment';
import FeedLogList from '../../Components/FeedLogList';
import HeartBtn from '../../Components/HeartBtn';
import FeedBtn from '../../Components/FeedBtn';
import './Main.scss';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      heart_ani: false,
    };
  }

  heartAniHandler = () => {
    this.setState({ heart_ani: !this.state.heart_ani });
  };

  render() {
    const path_comment =
        'M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z',
      path_share =
        'M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z',
      path_bookmark =
        'M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z';
    // path_heart_fill =
    //   'M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z';

    return (
      <section className='feeds_container'>
        <div className='feed_log'>
          <FeedLogList url={'https://ca.slack-edge.com/TH0U6FBTN-U011AUSAMED-e77e219111eb-512'} user='daehwiii' />
          <FeedLogList url={'https://ca.slack-edge.com/TH0U6FBTN-U011AUS40D7-5cf4faa84d71-512'} user='gwang5' />
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
            {/* <svg onClick={this.heartAniHandler} className={this.state.heart_ani ? 'on_animation' : 'off_animation'} width='100' height='100' viewBox='0 0 100 100'>
              <path d={path_heart_fill} />
            </svg> */}
            <img alt='wecode' src={require('../../Images/Main/feed_main.JPG')} />
          </div>

          <div className='feed_icons'>
            <div>
              <ul>
                <li>
                  <HeartBtn width='24' height='24' />
                </li>
                <FeedBtn path={path_comment} />
                <FeedBtn path={path_share} />
              </ul>
            </div>
            <div>
              <svg fill='#262626' width='24' height='24' viewBox='0 0 48 48'>
                <path d={path_bookmark} />
              </svg>
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
            <Uploadcomment />
          </div>
        </div>
      </section>
    );
  }
}

export default Article;
