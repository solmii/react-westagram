import React from 'react';
import CommentForm from './CommentForm';
import '../Pages/Main/Main.css';

class Uploadcomment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentArr: [],
    };
  }
  // 사용자가 입력한 comment input값으로 setState 해주는 이벤트
  handleSetComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  // 게시 버튼 클릭했을 때 댓글창 추가 이벤트
  handleAddForm = () => {
    this.setState({ commentArr: this.state.commentArr.concat(this.state.comment) });
  };
  // Enter 눌렀을 때 댓글창 추가 이벤트
  handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      this.handleAddForm();
    }
  };

  render() {
    return (
      <>
        <div className='comments'>
          <CommentForm name='User1' tag='@solmii_dev' comment='치킨이,,,참,,,맛있겠읍니다,,,@>->-' />
          <CommentForm name='User2' tag='@wecode' comment='열코딩 화이팅!!' />
          {this.state.commentArr.map((comment, idx) => (
            <CommentForm key={idx} name='Wecoder' comment={comment} />
          ))}
        </div>
        <div className='comment_day'>
          <p>1일 전</p>
        </div>

        <div className='upload_comment'>
          <input placeholder='댓글 달기...' onKeyPress={this.handlePressEnter} onChange={this.handleSetComment} />
          <button className={this.state.comment ? 'comment_btn_abled' : 'comment_btn_disabled'} onClick={this.handleAddForm}>
            게시
          </button>
        </div>
      </>
    );
  }
}
export default Uploadcomment;
