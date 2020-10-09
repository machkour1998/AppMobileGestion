import { call, put, takeLatest } from "redux-saga/effects";
import { getUser } from "../../../services/users";
import { USER } from "../../constants";
import {
  FAILURE,
  GET,
  LIST,
  POST,
  PUT,
  REQUEST,
  SUCCESS,
} from "../../ActionType";

// get job opportunity by Id
export function* get(payload) {
  console.log("response9");
  try {
    console.log("responseA");
    const response = yield call(getUser, payload.email);
    console.log("response", response.user);
    yield put({ type: SUCCESS(GET(USER)), response });
  } catch (error) {
    yield put({ type: FAILURE(GET(USER)), error });
  }
}

export function* watchApp() {
  yield takeEvery(REQUEST(GET(USER)), get);
}
