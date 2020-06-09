import React from 'react';
import logo from '../Images/logo_text.png';
import '../Pages/Main/Main.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className='nav_container'>
        <div className='nav_bar'>
          <div className='nav_logo'>
            <img src={logo} />
          </div>

          <div className='search_form'>
            <img className='search_icon' src={require('../Images/Main/search.png')} />
            <img className='cancel_icon' src={require('../Images/Main/cancel.png')} />
            <input type='text' placeholder='검색' />
          </div>

          <div className='content_icons'>
            <ul>
              <li className='icon_home'>
                <a href='#'>
                  <img src={require('../Images/Main/icon_home.png')} />
                </a>
              </li>
              <li className='icon_direct'>
                <a href='#'>
                  <svg width='22' height='22' viewBox='0 0 48 48'>
                    <path d='M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z'></path>
                  </svg>
                </a>
              </li>
              <li className='icon_nav'>
                <a href='#'>
                  <img src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png' />
                </a>
              </li>
              <li className='icon_heart'>
                <a href='#'>
                  <img src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png' />
                </a>
              </li>
              <li className='icon_pofile'>
                <a href='#'>
                  <div className='profile_box'>
                    <img alt='solmii_dev' src={require('../Images/Main/icon_profile.jpg')} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
