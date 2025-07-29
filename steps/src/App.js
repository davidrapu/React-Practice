import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  const buttonStyle = { backgroundColor: "#7950f2", color: "#fff" };

  function handlePrevious() {
    if (step > 1) setStep(step => step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step => step + 1);
  }
  return isOpen === true ? (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <div className="message">
        <h3>
          Step {step}: {messages[step - 1]}
        </h3>
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
      <button onClick={() => setIsOpen(!isOpen)} className="close">
        {"\u00D7"}
      </button>
    </div>
  ) : (
    <button onClick={() => setIsOpen(!isOpen)} className="close">
      {"\u00D7"}
    </button>
  );
}

export default App;
