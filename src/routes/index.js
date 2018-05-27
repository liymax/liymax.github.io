import React from "react";
import AsyncComponent from "../utils/AsyncComponent";
const routes = [
  { path: "home", Component: AsyncComponent(() => import(/*webpackChunkName: 'home' */ "./home")) }
];

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      path: "home"
    };
  }
  render() {
    const { path } = this.state;
    const { Component } = routes.find(e => e.path === path) || routes[0];
    return <Component />;
  }
}
