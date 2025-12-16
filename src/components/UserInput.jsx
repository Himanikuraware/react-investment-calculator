const UserInput = ({ userInput, handleChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            id="initialInvestment"
            type="number"
            value={userInput.initialInvestment}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            id="annualInvestment"
            type="number"
            value={userInput.annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            id="expectedReturn"
            type="number"
            value={userInput.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration (Years)</label>
          <input
            id="duration"
            type="number"
            value={userInput.duration}
            onChange={handleChange}
            min="1"
            step="1"
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
