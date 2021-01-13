import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
const Posts = ({ sincPosts }) => {
    if (!sincPosts.length) {
        return <p className="text-center">Постов пока нет</p>
    }
    return sincPosts.map(post => <Post post={post} key={post.id} />)
}
const mapStateToProps = state => {
    console.log(state)
    return {
        sincPosts: state.posts.posts
    }
}
export default connect(mapStateToProps, null)(Posts)