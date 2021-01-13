import { FETCH_POST, REQUEST_POSTS } from "./types"
import { call, put, takeEvery } from 'redux-saga/effects'
import { hideLoader, showLoader } from "./action"

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker)

}
function* sagaWorker() {
    yield put(showLoader())
    const payload = yield call(FetchedPost)
    yield put({ type: FETCH_POST, payload })
    yield put(hideLoader())
}

async function FetchedPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}