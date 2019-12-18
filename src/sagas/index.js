import { takeLatest, all, } from 'redux-saga/effects';
import AxiosService from '../services/axios'
import { call, cancel, cancelled, fork, put, take } from 'redux-saga/effects';
import axios from 'axios'

const axiosServie = new AxiosService;


function loginService(data) {
  console.log(" data", data.data);

  return new Promise(async (resolve, reject) => {

    await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', data.data).then((result) => {
      console.log(" data ", result.data);

      resolve(result);
    }).catch((error) => {
      reject(error)
    })
  })

}




export function* authorize() {
  try {
    const token = yield call(loginService)
    yield put({type: 'LOGIN_SUCCESS'})
    yield put({type: 'SAVE_TOKEN', token});
  } catch(error) {
    yield put({type: 'LOGIN_ERROR', error})
  }
  finally {
    if (yield cancelled()) {
      yield put({type: 'LOGIN_CANCELLED'})
    }
  }
}


 function* userLogin (data) {
  console.log(" fetchip called ", data.data);
  // const json = yield fetch('http://fundoonotes.incubation.bridgelabz.com/api/user/login',data)
  // var result;
  const result =  yield fetch(  axiosServie.loginService(data))
    .then(response =>
      // console.log("response ", response),
      result = response,
      // console.log("result ", result)


      //  response.json(),
    );
  // console.log(" result ", result);

  yield put({ type: "NEWS_RECEIVED", json: 'sresult', });
}
function* actionWatcher(data) {
  console.log(" action watcher is working ", data);
  yield takeLatest('LOGIN', userLogin)
  // const {email,password}= yield take('LOGIN')
  // const task = yield fork(fetchNews, email, password)
  const task = yield fork(authorize)


}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}