import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
const Tone = require("tone");
import { observable, action, computed, autorun, reaction } from "mobx";

@observer
class App extends React.Component {
  @observable clickCount = 0;
  constructor(props) {
    super(props);
    this.state = {};
  }

  play() {
    let synth = new Tone.Synth().toMaster();
    synth.triggerAttackRelease("C4", "4n");
    synth.triggerAttackRelease("C4", "8n");
  }

  hello() {
    return "hello world";
  }
  render() {
    return (
      <div>
        <label>{this.clickCount}</label>
        <button onClick={() => (this.clickCount += 1)}>+1</button>
        <button onClick={action(() => (this.clickCount += 1))}>+1(action)</button>
        <img src="/static/demo.png" />
        <div>
          <button onClick={this.play.bind(this)}>Music</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
