import './HamburgerButton.css';

export default function HamburgerButton({ onClick }) {
  function handleClick() {
    onClick();
  }

  return (
    <button onClick={handleClick} className="hamburger-button">
      <span className="hamburger-button__bar"></span>
      <span className="hamburger-button__bar"></span>
      <span className="hamburger-button__bar"></span>
    </button>
  );
}

