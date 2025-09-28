import StatefulMessage from "./components/StatefulMessage";
import StatelessMessage from "./components/StatelessMessage";
import ClassMessage from "./components/ClassMessage";

function App() {
  return (
    <>
      <h1>React компоненти</h1>

      <h2>Stateless (безстановий)</h2>
      <StatelessMessage text="Привіт! Я безстановий компонент." />

      <h2>Stateful (становий)</h2>
      <StatefulMessage />

      <h2>Class (класовий)</h2>
      <ClassMessage />
    </>
  );
}

export default App;
