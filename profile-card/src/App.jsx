import "./App.css";
import profileImg from "./assets/profile-image.jpg";
import { skills } from "./data";

function App() {
  return (
    <div className="box">
      <Avatar />
      <Description />
      <div className="progLangContainer">
        {skills.map((value, index) => (
          <Language
            key={index}
            codeLang={value.skill}
            level={value.level}
            colr={value.color}
          />
        ))}
      </div>
    </div>
  );
}
function Avatar() {
  return <img src={profileImg} alt="profile Image" />;
}
function Description() {
  return (
    <div className="descBox">
      <h1>David Rapu</h1>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quis
        labore aut excepturi, repellendus omnis sunt delectus velit cupiditate,
        enim libero in! Dicta saepe beatae officiis. Maiores ex ullam
        praesentium!
      </span>
    </div>
  );
}

function Language({ codeLang, level, colr }) {
  const levels = {
    beginner: "💀",
    intermediate: "😎",
    advanced: "🤓",
  };
  return (
    <div style={{ backgroundColor: colr }} className="progLang">
      <span>{codeLang}</span>
      <span style={{ marginLeft: "1em" }}>{levels[level]}</span>
    </div>
  );
}

export default App;
