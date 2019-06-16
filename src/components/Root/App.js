import React from "react";
// import './App.css';
// import SigninCon from "../../container/Signin";
import AppRouter from "../router";
import { Provider } from "react-redux"
import store from "../../store/index"
function App() {
  return (
    // <SigninCon />
    <Provider store={store}>

      <AppRouter />
    </Provider>


  );
}

export default App;
