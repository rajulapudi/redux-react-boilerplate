import React, { Component } from 'react';
import PostsPage from './components/PostsPage';

export default class App extends Component {
	render() {
		return (
			<div>
				POSTS
				<PostsPage />
			</div>
		);
	}
}
