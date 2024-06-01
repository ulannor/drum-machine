import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="drum-container">
      <div className="keys-container">
        <div className="grid-item">
          <button>Button 1</button>
        </div>
        <div className="grid-item">
          <button>Button 2</button>
        </div>
        <div className="grid-item">
          <button>Button 3</button>
        </div>
        <div className="grid-item">
          <button>Button 4</button>
        </div>
        <div className="grid-item">
          <button>Button 5</button>
        </div>
        <div class="grid-item">
          <button>Button 6</button>
        </div>
        <div className="grid-item">
          <button>Button 7</button>
        </div>
        <div className="grid-item">
          <button>Button 8</button>
        </div>
        <div className="grid-item">
          <button>Button 9</button>
        </div>
      </div>
      <div className="controls-container">
      <div class="volume-controller">
        <input type="range" min="0" max="100" value="50" class="volume-slider" id="volumeSlider" />
        <div class="volume-level" id="volumeLevel">Volume: 50%</div>
    </div>
      </div>
    </div>
  );
}

export default App;
