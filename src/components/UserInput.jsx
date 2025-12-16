const UserInput = () => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input id="initial-investment" type="text" />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input id="annual-investment" type="text" />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input id="expected-return" type="text" />
        </div>
        <div>
          <label htmlFor="duration">Duration (Years)</label>
          <input id="duration" type="number" />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
