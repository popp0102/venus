import './CosmicButton.css';

export default function CosmicButton({label, onClick, className, type}) {
  function handleClick() {
    if (navigateTo) {
      navigate(navigateTo);
    }

    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      type={type}
      className={`cosmic-button ${className}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
