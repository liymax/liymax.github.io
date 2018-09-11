import React from 'react';

export default loadComponent => (
  class AsyncComponent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
	      Component: null
      };
    }

    componentWillMount() {
      if (this.state.Component !== null) {
        return;
      }
      loadComponent()
        .then(module => module.default)
        .then((Component) => {
          this.setState({ Component });
        }).catch((err) => {
          console.error('async load component error:', err);
          throw err;
        });
    }

    render() {
      const { Component } = this.state;
      return (Component) ? <Component {...this.props} /> : null;
    }
  }
);

