import React from "react";
export default loadComponent =>
  class extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = { Compo: null };
    }
    componentWillMount() {
      this.state.Compo === null &&
        loadComponent()
          .then(module => module.default)
          .then(Compo => {
            this.setState({ Compo });
          })
          .catch(err => {
            console.error("load async component error:", err);
            return err;
          });
    }
    render() {
      const { Compo } = this.state;
      return Compo ? <Compo {...this.props} /> : null;
    }
  };
