import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'
import { PostWrapper, Navigate, Post, StatisticData} from '../../components';
import * as service from '../../services/post';

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
		const {fetching, post} = this.state;

		return (
			<PostWrapper>
				<Navigate
					disabled={fetching}
				/>
				<Post
					data={post.data}
					dataNew={post.dataNew}
				/>
				<Card>
					<Card.Content>
						<Card.Header>국내 코로나 확진현황</Card.Header>
					</Card.Content>
					<Card.Content>
						<StatisticData
							data={post.data}
							dataNew={post.dataNew}
						/>
					</Card.Content>
				</Card>
			</PostWrapper>
		);
	}
}

export default PostContainer;