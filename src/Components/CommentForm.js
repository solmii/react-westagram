import React from 'react';
import '../Pages/Main/Main.css';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='comment_form'>
        <a className='comment_id' href=''>
          {this.props.name}
        </a>
        <a className='comment_tag' href=''>
          {this.props.tag}
        </a>
        <span>{this.props.comment}</span>
      </div>
    );
  }
}
export default CommentForm;
