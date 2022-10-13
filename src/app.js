import { useState } from "react";
import react from "react";
import "./styles.css";

// var name = "Hello world"
var colorMain = "#6E85B7";

const animalEmojiDict = {
  "🦍": "Gorilla",
  "🦝": "Raccoon",
  "🐹": "Hamster",
  "🐿️": "Chipmunk",
  "🕊️": "Dove",
  "🦖": "T-Rex",
  "🦁": "Lion",
  "🐘": "Elephant",
  "🐼": "Panda",
  "🦥": "Sloth",
  "🦦": "Otter",
  "🦨": "Skunk",
  "🦘": "Kangaroo",
  "🦡": "Badger"
};

var animalWeKnow = Object.keys(animalEmojiDict);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var emojiInput = event.target.value;
    var meaning = animalEmojiDict[emojiInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(animal) {
    var meaning = animalEmojiDict[animal];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: colorMain }}>Animal Emoji</h1>
      <input
        placeholder="Enter your animal emoji here"
        onChange={inputChangeHandler}
      />
      {/* <input onChange={inputChangeHandler}></input> */}
      <div id="output-box">
        Meaning: <span style={{ color: "blue" }}>{meaning}</span>
      </div>

      <h3>Animals we Know </h3>
      {animalWeKnow.map(function (animal) {
        return (
          <span
            onClick={() => emojiClickHandler(animal)}
            style={{ fontSize: "2rem", padding: "0.2rem" }}
            key={animal}
          >
            {animal}
          </span>
        );
      })}
    </div>
  );
}
