import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      userPw: '',
    };
  }

  changeIdHandler = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };

  changePwHandler = (e) => {
    this.setState({
      userPw: e.target.value,
    });
  };

  clickPostHandler = () => {
    // POST
    fetch('http://10.58.7.42:8000/user/signin/', {
      method: 'post',
      body: JSON.stringify({
        user_id: this.state.userId,
        password: this.state.userPw,
        // account, password key 값은 백앤드와 소통해서 일치시켜야 한다.
      }),
    })
      .then((res) => res.json()) // 로그인이 성공했다는 가정 하에 실행됨
      .then((res) => {
        localStorage.setItem('access_token', res.access_token);
        this.props.history.push('/main');
      });
  };

  render() {
    return (
      <section className='login_container'>
        <div className='login_form'>
          <div className='logo'>
            <img alt='westagram' src={require('../../Images/logo_text.png')} />
          </div>
          <input className='login_input' onChange={this.changeIdHandler} type='text' placeholder='전화번호, 사용자 이름 또는 이메일' />
          <input className='login_input' onChange={this.changePwHandler} type='password' placeholder='비밀번호' />
          <button className={this.state.userPw.length > 4 && this.state.userId.includes('@') ? 'login_button_abled' : 'login_button_disabled'} onClick={this.clickPostHandler} type='button'>
            로그인
          </button>
          <div className='or_form'>
            <div className='or_line' />
            <p>또는</p>
            <div className='or_line' />
          </div>
          <div className='facebook_login'>
            <a href=''>
              <img src={require('../../Images/Login/facebook.png')} />
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

export default withRouter(Login);
