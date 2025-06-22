import { createPortal } from 'react-dom';

import './ShootingStar.css';

export default function ShootingStar() {
  return createPortal(
    <div className="sky">
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
    </div>
  , document.getElementById('skyfall')
  );
}
