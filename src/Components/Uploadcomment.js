import React from 'react';
import CommentForm from './CommentForm';
import '../Pages/Main/Main.scss';

class Uploadcomment extends React.Component {
  constructor(props) {
    super(props);
    // 댓글 삭제 이벤트
    // this.btnPressHandler = this.btnPressHandler.bind(this);
    // this.btnReleaseHandler = this.btnReleaseHandler.bind(this);
    this.state = {
      userInput: '',
      commentArr: [],
      commentCount: 2,
    };
  }
  // 사용자가 입력한 comment input값으로 setState 해주는 이벤트
  setCommentHandler = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };
  // 게시 버튼 클릭했을 때 댓글창 추가 이벤트
  addFormHandler = () => {
    if (this.state.userInput) {
      this.setState({ commentArr: this.state.commentArr.concat(this.state.userInput), userInput: '', commentCount: this.state.commentCount + 1 });
    }
  };
  // Enter 눌렀을 때 댓글창 추가 이벤트
  pressEnterHandler = (e) => {
    if (e.key === 'Enter') {
      this.addFormHandler();
    }
  };
  render() {
    console.log(this.state.commentArr);
    return (
      <>
        <div className='more_comment'>
          <a href=''>댓글 {this.state.commentCount}개 모두 보기</a>
        </div>

        <div className='comments'>
          <CommentForm name='kdg21' tag='@solmii_dev' comment='치킨이,,,참,,,맛있겠읍니다,,,@>->-' />
          <CommentForm name='dooreplay' tag='@wecode' comment='열코딩 화이팅!!' />
          {this.state.commentArr.map((userInput, idx) => (
            <CommentForm name='Wecoder' comment={userInput} key={idx} index={idx} />
          ))}
        </div>
        <div className='comment_day'>
          <p>1일 전</p>
        </div>

        <div className='upload_comment'>
          <input placeholder='댓글 달기...' value={this.state.userInput} onKeyPress={this.pressEnterHandler} onChange={this.setCommentHandler} />
          <button className={this.state.userInput ? 'comment_btn_abled' : 'comment_btn_disabled'} onClick={this.addFormHandler}>
            게시
          </button>
        </div>
      </>
    );
  }
}
export default Uploadcomment;
