import React from "react";
export default function WithContext(store, actions, context) {
  return class extends React.PureComponent {
    constructor(props) {
      super(props);
      const { initState, reduce } = store;
      this.state = { ...initState };
      this.actions = {};
      const dispatch = async actionType => {
        this.setState(reduce(this.state, actionType));
      };
      const getState = () => this.state;
      Object.entries(actions).forEach(([k, v]) => {
        this.actions[k] = v(dispatch, getState);
      });
    }
    render() {
      const { state, actions } = this;
      const { Provider } = context;
      const initValue = { ...state, ...actions };
      return <Provider value={initValue}>{this.props.children}</Provider>;
    }
  };
}
