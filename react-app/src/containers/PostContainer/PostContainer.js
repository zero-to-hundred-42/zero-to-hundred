import React, { Component } from 'react';
import { CardGroup, PostWrapper } from '../../components';
import * as service from '../../services/post';

// 메인 페이지
class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      fetching: false,
      post: {
        data: null,
        dataNew: null,
      },
    };
  }

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  fetchPostInfo = async () => {
    const info = await Promise.all([service.getPost(), service.getPostNew()]);
    let data = info[0].data;
    let dataNew = info[1].data;
    this.setState({
      post: {
        data,
        dataNew,
      },
      fetching: false,
    });
  };

  render() {
    const { post } = this.state;
    return (
      <PostWrapper>
        <CardGroup data={post.data} dataNew={post.dataNew} />
      </PostWrapper>
    );
  }
}

export default PostContainer;
