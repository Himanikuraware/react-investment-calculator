import headerLogo from '../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <div id="header">
      <img src={headerLogo} alt="Logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
};

export default Header;
