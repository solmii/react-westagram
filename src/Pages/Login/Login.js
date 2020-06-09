import React from 'react';
import logo from '../../Images/logo_text.png';
import facebook from '../../Images/Login/facebook.png';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <section className='login_container'>
        <div className='login_form'>
          <div className='logo'>
            <img alt='westagram' src={logo} />
          </div>
          <input className='login_input' type='text' placeholder='전화번호, 사용자 이름 또는 이메일' autocomplete='”off”' />
          <input className='login_input' type='password' placeholder='비밀번호' />
          <button className='login_button' disabledYype='true'>
            로그인
          </button>
          <div className='or_form'>
            <div className='or_line' />
            <p>또는</p>
            <div className='or_line' />
          </div>
          <div className='facebook_login'>
            <a href='#'>
              <img src={facebook} />
              Facebook으로 로그인
            </a>
          </div>
          <div className='forgot_pw'>
            <a href='https://www.instagram.com/accounts/password/reset/' target='_blank'>
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </section>
    );
  }
}

// export 해서 내보내야 다른데서 쓸 수 있다!
export default Login;
