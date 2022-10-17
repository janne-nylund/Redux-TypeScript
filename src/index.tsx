import { StrictMode } from "react";
//@ts-ignore
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
