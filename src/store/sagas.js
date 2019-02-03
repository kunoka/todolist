import {takeEvery, put} from 'redux-saga/effects';
import {GET_TODO_LIST} from './actionTypes';
import axios from 'axios';
import {initListAction} from './actionCreators';

function* getInitList() {
  try{
    const url = 'api/todolist';
    const res = yield axios.get(url);
    const action = initListAction(res.data);
    yield put(action);
  }catch {
    console.log('error');
  }

}
function* mySaga() {
  console.log('I am sagas function mySaga');
  yield takeEvery(GET_TODO_LIST, getInitList);
  console.log('I am sagas function mySaga after');

}

export default mySaga;