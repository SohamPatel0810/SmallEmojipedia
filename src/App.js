import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": " Face",
  "😃": " Face with Big Eyes",
  "😄": " Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": " Squinting Face",
  "😅": " Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": " Tears of Joy"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We Don't Have It In Our DataBase";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <b style={{ padding: "1rem" }}>
        {" "}
        <h1 style={{ color: "blueviolet" }}>Emojis</h1>
      </b>
      <input
        placeholder="🔍 Search Your Emoji Here"
        onChange={emojiInputHandler}
      ></input>
      <h2 style={{ fontSize: 25 }}>
        <div style={{ color: "black", padding: "0.5rem", fontSize: "50" }}>
          {" "}
          {meaning}{" "}
        </div>
      </h2>
      <h3>
        {emojisWeKnow.map(function (emojis) {
          return (
            <span
              onClick={() => emojiClickHandler(emojis)}
              style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            >
              {emojis}
            </span>
          );
        })}
      </h3>
    </div>
  );
}
