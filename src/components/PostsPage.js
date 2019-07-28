import React, { Component } from 'react'

class PostsPage extends Component {
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        fetchPosts()
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{

}
export default PostsPage