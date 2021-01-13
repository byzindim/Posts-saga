import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchedPost } from '../redux/action';
import { Loader } from './Loader';
import Post from './Post';
export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.FetchedPost)
    const loading = useSelector(state => state.app.loading)
    if (loading) {
        return <Loader />
    }

    if (!posts.length) {
        return <button
            className="btn btn-primary"
            onClick={() => dispatch(FetchedPost())}

        >Загрузить</button>
    }
    return posts.map(post => <Post post={post} key={post.id} />)
}