import { useState } from "react";
import "./styles.css";

function StatefulMessage() {
  const [text, setText] = useState("Привіт, я становий компонент!");
  const [toggled, setToggled] = useState(false);

  return (
    <div className="component-box">
      <p className="component-text">{text}</p>
      <button
        className="component-btn"
        onClick={() => {
          if (toggled) {
            setText("Привіт, я становий компонент!");
          } else {
            setText("Текст змінено!");
          }
          setToggled(!toggled);
        }}
      >
        Змінити текст
      </button>
    </div>
  );
}

export default StatefulMessage;
