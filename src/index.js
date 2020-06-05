import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { authReducer } from "./reducers/authReducer";
import { levelsReducer } from "./reducers/levelsReducer";
import { lessonReducer } from "./reducers/lessonReducer";
import "./css/index.css"
import App from "./App";

const rootReducer = combineReducers({
  user: authReducer,
  level: levelsReducer,
  lesson: lessonReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
