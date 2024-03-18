import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <div className="card">
        <div className="card-container">
          <div className="card1">
            <img src="/assets/images/avatar-jessica.jpeg" alt="" />
            <span className="Name">Jessica Randall</span>
            <span className="Place">London, United Kingdom</span>
            <span className="Tag">"Front-end developer and avid reader."</span>
          </div>
          <div className="card2">
            <span className="tab">GitHub</span>
            <span className="tab">Frontend Mentor</span>
            <span className="tab">Linkedin</span>
            <span className="tab">Twitter</span>
            <span className="tab">Instagram</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
