import React, {Component} from 'react';
import { PostWrapper, Navigate, Post } from '../../components';
import * as service from '../../services/post';

class PostContainer extends Component{

	constructor(props) {
		super();
		this.state = {
			postId: 1,
			fetching: false,
			post: {
				TotalCase: null,
				data:null
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
		]);
		const {TotalCase, TotalDeath} = info[0].data;
		let data = info[0].data;
		this.setState({
			postId,
			post: {
				TotalCase,
				data,
				TotalDeath
			},
			fetching: false
		});
		console.log(data);
	}

	render() {
		const {postId, fetching, post} = this.state;

		return (
			<PostWrapper>
				<Navigate
					postId={postId}
					disabled={fetching}
				/>
				<Post
					TotalCase={post.TotalCase}
					data={post.data}
					TotalDeath={post.TotalDeath}
				/>
			</PostWrapper>
		);
	}
}

export default PostContainer;