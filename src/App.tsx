import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Index extends React.Component {
  render() {
    return <h1>首页</h1>
  }
}

class Login extends React.Component {
  render() {
    return <h1>登陆</h1>
  }
}

class SignUp extends React.Component {
  render() {
    return <h1>注册</h1>
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Index} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;