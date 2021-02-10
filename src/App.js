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
  "😂": " Tears of Joy",
  "🙂":" Slightly Smiling Face",
  "🙃":" Upside-Down Face",
  "😉":"Winking Face",
  "😊":"Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰":" Smiling Face with Hearts",
  "😍":"Smiling Face with Heart-Eyes",
  "🤩":"Star-Struck",
  "😘":" Face Blowing a Kiss",
  "😗":" Kissing Face",
  "😚":" Kissing Face with Closed Eyes",
  "😙":" Kissing Face with Smiling Eyes",
  "😋":" Face Savoring Food",
  "😛": "Face with Tongue",
  "😜":"Winking Face with Tongue",
  "🤪":"Zany Face",
  "😝":"Squinting Face with Tongue",
  "🤑" :"Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐" :"Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
 "😐" :"Neutral Face",
  "😑": "Expressionless Face",
  "😶" :"Face Without Mouth",
  "😏": "Smirking Face",
  "😒":" Unamused Face",
  "🙄" :"Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥" :"Lying Face",
  "😌":" Relieved Face",
  "😔" :"Pensive Face",
  "😪": "Sleepy Face",
  "🤤" :"Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒" :"Face with Thermometer",
  "🤕" :"Face with Head-Bandage",
  "🤢" :"Nauseated Face",
  "🤮" :"Face Vomiting",
  "🤧" :"Sneezing Face",
  "🥵" :"Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠":"Cowboy Hat Face",
  "🥳":"Partying Face",
  "😎":"Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": " Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns",
  "💀": "Skull",
  "💩": "Pile of Poo",
  "🤡": "Clown Face",
  "👹": "Ogre",
  "👺": "Goblin",
  "👻": "Ghost",
  "👽": "Alien",
  "👾": "Alien Monster",
  "🤖": "Robot",
  "😺":" Grinning Cat"
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
