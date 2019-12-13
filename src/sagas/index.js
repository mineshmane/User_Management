import { put, takeLatest,take,fork, all } from 'redux-saga/effects';
function* fetchNews(data) {
  console.log(" fetchip called ");
  
  const json = yield fetch('http://fundoonotes.incubation.bridgelabz.com/api/user/login',data)
        .then(response => response.json(), );    
  yield put({ type: "NEWS_RECEIVED", json: "arcicle mila", });
}
function* actionWatcher(data) {
    console.log(" action watcher is working ",data);
    yield takeLatest('LOGIN',fetchNews)
    // const {email,password}= yield take('LOGIN')
    // const task = yield fork(fetchNews, email, password)s

}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}