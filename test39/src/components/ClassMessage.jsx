import { Component } from "react";
import "./styles.css";

class ClassMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Привіт, я класовий компонент!" };
  }

  render() {
    return (
      <div className="component-box">
        <p className="component-text">{this.state.text}</p>
        <button
          className="component-btn"
          onClick={() =>
            this.setState({ text: "Текст змінено у класі!" })
          }
        >
          Змінити текст
        </button>
      </div>
    );
  }
}

export default ClassMessage;
