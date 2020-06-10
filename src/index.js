// 필요한 패키지/파일들을 먼저 import
import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Common.css';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // ReactDOM.render 함수를 실행
  <React.StrictMode>
    <Login />
    <Main />
  </React.StrictMode>, // 첫번째 인자 = App.js => 내가 HTML 구조에 렌더시키고 싶은 아이
  document.getElementById('root') // 두번째 인자 = HTML에서 id가 root인 녀석 => 첫번째 인자가 렌더 될 위치
);

serviceWorker.unregister();
