import React from 'react';
import './Post.css';
import { CommentList } from '../';

const Post = ({data}) => (
	<div className="Post">
		<h1>title</h1>
		<p>
			{data?.TotalCase}
		</p>
	</div>
);

export default Post;