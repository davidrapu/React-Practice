import { useState } from "react";

function App() {
  let [step, setStep] = useState(1);
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  const buttonStyle = { backgroundColor: "#7950f2", color: "#fff" };

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <div className="message">
        Step {step}: {messages[step-1]}
      </div>
      ;
      <div className="buttons">
        <button onClick={handlePrevious} style={buttonStyle}>
          Previous
        </button>
        <button onClick={handleNext} style={buttonStyle}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
