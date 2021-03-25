import React from "react";
import { Button } from "antd";
import proptypes from "prop-types";
import ThemedButton from "ThemedButton";
import "App.css";

class PostDetail extends React.Component {
  static propTypes = {
    postId: proptypes.number.isRequired,
  };
  state = {
    PostDetail: null,
  };
  componentDidMount() {
    const { postId } = this.props;
    this.requestPost([postId]);
  }

  componentDidUpdate(prevProps) {
    const { postId } = this.props;
    if (postId !== prevProps.postId) {
      this.requestPost(postId);
    }
  }

  requestPost(postId) {
    console.log(`request post #${postId}`);
    // axios (http client) => this.setState
    setTimeout(() => {
      this.setState({
        PostDetail: `로딩된 post #${postId}`,
      });
    }, 3000);
  }

  render() {
    const { postId } = this.props;
    const { PostDetail } = this.state;
    return (
      <div>
        포스팅 #{postId}
        <hr />
        {!PostDetail && "로딩 중 ..."}
        {PostDetail}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    postId: 10,
  };
  render() {
    return (
      <div>
        <ThemedButton theme="success" label="Say hello" />
        <PostDetail />
        <button onClick={() => this.setState({ postId: 20 })}>
          postId 변경
        </button>
      </div>
    );
  }
}

export default App;
