import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./components/HomePage";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/login">登录</Link>
            </li>
            <li>
              <Link to="/register">注册</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={HomePage} />
        <Route path="/Login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </div>
    </BrowserRouter>
  );
};
export default App;


