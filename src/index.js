import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { customeTheming } from "./components/common/Theme/Theme";
import { store } from "./app/store";

const test = () => {
  window.addEventListener("storage", ({ oldValue, newValue }) => {
    // Note: For this app we don't have any server to verify role/roles, in your case you can verify role/roles from your server and update accordingly.
    alert(
      `You can not change role/roles from ${oldValue} to ${newValue}, if you want to change role/roles please log out and then log in with a different roles.`
    );
    localStorage.setItem("roles", oldValue);
  });
};

test();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={customeTheming}>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
