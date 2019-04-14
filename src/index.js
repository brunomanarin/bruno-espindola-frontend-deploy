import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./app";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import { fetchArticles } from "./Actions/articleActions";
import { fetchSubjects } from "./Actions/subjectActions";

store.dispatch(fetchArticles());
store.dispatch(fetchSubjects());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
