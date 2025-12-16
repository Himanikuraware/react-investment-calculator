import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInput((prev) => ({ ...prev, [id]: +value }));
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {inputIsValid ? (
        <Result results={userInput} />
      ) : (
        <p className="center error">Duration must be at least 1 year.</p>
      )}
    </>
  );
}

export default App;
