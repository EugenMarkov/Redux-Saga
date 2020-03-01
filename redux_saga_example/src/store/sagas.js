import { takeEvery, takeLatest, put, call, all } from "redux-saga/effects";
import * as constants from "./constants";
import { putDataSuccess, putDataFailure } from "./actions";

const fetchData = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => ({data}))
    .catch(error => ({ error }))
};

function* workerLoadData() {
  const { data, error } = yield call(fetchData);
  data ? yield put(putDataSuccess(data)) : yield put(putDataFailure(error));
}

export function* watchLoadData() {
  yield takeLatest(constants.LOAD_DATA, workerLoadData)
}

export function* helloSaga() {
  yield console.log('Hello Sagas!')
}

export default function* rootSaga() {
  yield all([
    watchLoadData(),
    helloSaga(),
  ])
}
