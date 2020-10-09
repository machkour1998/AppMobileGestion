import { all } from "redux-saga/effects";
import { watchApp } from "./Module1";

export default function* rootSaga() {
  yield all([watchApp()]);
}
