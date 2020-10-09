import React, { Component } from "react";
import Navigation from "./Navigation/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

export default class App extends Component {
  render() {
    //You're getting this warning because componentWillMount is deprecated in newer React versions.
    //if you are unable to update libraries for whatever reason, you can try suppressing these errors in the console by putting something like console.warn = () => {}
    console.warn = () => {};
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
