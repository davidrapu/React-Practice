import { useState } from 'react'
import './App.css'
import profileImg from './assets/profile-image.jpg'

function App() {
  const langs = ['HTML + CSS', 'JavaScript', 'Web Design', 'Git and GitHub', 'React', ]
  return (
    <div className="box">
      <Avatar />
      <Description />
      <div className="progLangContainer">
        {langs.map((value, index) => (
          <Language key={index} codeLang={value} />
        ))}
      </div>
    </div>
  );
}
function Avatar() {
  return <img src={profileImg} alt="profile Image" />;
}
function Description() {
  return <div className='descBox'>
    <h3>David Rapu</h3>
    <span>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quis labore aut excepturi, repellendus omnis sunt delectus velit cupiditate, enim libero in! Dicta saepe beatae officiis. Maiores ex ullam praesentium!
    </span>
  </div>
}

function Language(props) {
  const levels = ["💀", "😎", "🤓"];
  const col = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  return (
    <div style={{ backgroundColor: col  }} className="progLang">
      <span>{props.codeLang}</span>
      <span style={{ marginLeft: "1em" }}>
        {levels[Math.floor(Math.random() * levels.length)]}
      </span>
    </div>
  );
}

export default App
