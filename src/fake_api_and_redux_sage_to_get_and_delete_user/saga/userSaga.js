import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { GET_USERS, DELETE_USER, setUsers } from "../redux/action";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Gọi API GET
function fetchUsers() {
  return axios.get(apiUrl);
}

// Gọi API DELETE
function deleteUserApi(id) {
  return axios.delete(`${apiUrl}/${id}`);
}

// Saga xử lý GET
function* getUsersSaga() {
  try {
    const response = yield call(fetchUsers);
    yield put(setUsers(response.data));
  } catch (error) {
    console.log("Error fetching users:", error);
  }
}

// Saga xử lý DELETE
function* deleteUserSaga(action) {
  try {
    const response = yield call(deleteUserApi, action.payload);
    alert(`response status ${response.status}`);
  } catch (error) {
    alert("Delete failed!");
  }
}

// Root saga
function* userSaga() {
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeEvery(DELETE_USER, deleteUserSaga);
}

export default userSaga;