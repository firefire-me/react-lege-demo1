// 样式初始化一般放在前面
//import "reset-css";
import React from "react";
import ReactDOM from "react-dom/client";

import "./normalize.css";
// UI框架的样式
import "antd/dist/antd.css";

// 全局样式
import "./assets/styles/global.scss";

// 组件的样式
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import Router from "./router/index"

// 状态管理
import { Provider } from "react-redux";
import store from "@/store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
);
