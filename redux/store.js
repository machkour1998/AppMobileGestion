import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer from "./reducers";
import rootSaga from "./sagas/watchers";

const sagaMiddleware = createSagaMiddleware();
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
