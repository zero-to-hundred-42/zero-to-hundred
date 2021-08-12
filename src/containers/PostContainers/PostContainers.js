import React, {Component} from 'react';
import { PostWrapper, CardGroup} from '../../components';
import * as service from '../../services/post';
import ChatTemplate from "./api_components/ChatTemplate";

class PostContainer extends Component{
	constructor(props) {
		super();
		this.state = {
			fetching: false,
			post: {
				data:null,
				dataNew:null
			}
		};
	}

	componentDidMount() {
		this.fetchPostInfo(1);
	}

	fetchPostInfo = async (postId) => {
		// const post = await service.getPost(postId);
		// console.log(post);
		// const comments = await service.getComments(postId);
		// console.log(comments);
		const info = await Promise.all([
			service.getPost(),
			service.getPostNew(),
		]);
		let data = info[0].data;
		let dataNew = info[1].data;
		this.setState({
			post: {
				data,
				dataNew
			},
			fetching: false
		});
	}

	render() {
		const {post} = this.state;

		return (
			<PostWrapper>
				<CardGroup
					data={post.data}
					dataNew={post.dataNew}
				/>
				  <div>
    				<ChatTemplate/>
  				</div>
			</PostWrapper>
		);
	}
}

export default PostContainer;