import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class PostsPage extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}
	render() {
		const postsItems = this.props.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));

		//console.log(this.props.posts);
		return (
			<div>
				POSTS
				{postsItems}
			</div>
		);
	}
}
const mapStateToProps = state => ({
	posts: state.postsReducer.postsArray
});
export default connect(
	mapStateToProps,
	{ fetchPosts }
)(PostsPage);
