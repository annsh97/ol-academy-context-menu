import Menu from "./components/Menu";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>Right Click To The Courses..</h1>
      <ul className="ul">
        <li id="red">HTML/CSS</li>
        <hr></hr>
        <li id="blue">JavaScript</li>
        <hr></hr>
        <li id="green">React.js</li>
        <hr></hr>
        <li id="yellow">React Native</li>
        <hr></hr>
      </ul>
      <Menu />
    </div>
  );
}
export default App;
