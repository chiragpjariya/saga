import { call, put, takeEvery } from 'redux-saga/effects'
import { getDatarequest, requestFullfilled, requestError } from './PostSlice'

const Api = 'https://jsonplaceholder.typicode.com/posts'

function* fetchData() {
    const res = yield call(fetch, Api)

    const data = yield res.json()

    yield put(requestFullfilled(data))
}

function* watchSaga() {
    yield takeEvery(getDatarequest, fetchData)
}


export default watchSaga