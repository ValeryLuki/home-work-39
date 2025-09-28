import "./styles.css";

function StatelessMessage({ text }) {
  return (
    <div className="component-box">
      <p className="component-text">{text}</p>
    </div>
  );
}

export default StatelessMessage;
