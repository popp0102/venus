import { useNavigate } from 'react-router-dom';

import './CosmicButton.css';

export default function CosmicButton({label, onClick, className, type, navigateTo=null}) {
  const navigate = useNavigate();

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


