import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.key);
      playSound(event.key.toUpperCase());
    };

    document.addEventListener("keydown", handleKeyDown);
  }, []);

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const playSound = (id) => {
    const audio = document.getElementById(id);
    const display = document.getElementById("display");

    console.log(audio);
    if (audio) {
      audio.play();
      const match = audio.src.match(/\/([^\/]+)\.mp3$/);

      let extractedName;

      if (match) {
        extractedName = match[1];
        console.log(extractedName); // This will log "Kick_n_Hat"
      } else {
        extractedName = "No match found";
        console.log(extractedName); // This will log "No match found"
        console.log(id); // This will log "Kick_n_Hat"
      }
      display.innerText = extractedName;
    }
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display"></div>
        <div className="drum-pads">
          {drumPads.map((drumPad) => (
            <div
              key={drumPad.keyCode}
              onClick={() => playSound(drumPad.text)}
              className="drum-pad"
              id={drumPad.src}
            >
              {drumPad.text}
              <audio
                src={drumPad.src}
                id={drumPad.text}
                className="clip"
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
