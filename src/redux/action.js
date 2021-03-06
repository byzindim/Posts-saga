import { CREATE_POST, FETCH_POST, HIDE_LOADER, SHOW_LOADER, REQUEST_POSTS } from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post,
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}
export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}
export function FetchedPost() {
    return {
        type: REQUEST_POSTS
    }

    // return async dispatch => {
    //     dispatch(showLoader())
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    //     const json = await response.json()
    //     setTimeout(() => {
    //         dispatch({ type: FETCH_POST, payload: json })
    //         dispatch(hideLoader())
    //     }, 2000);

    // }
}