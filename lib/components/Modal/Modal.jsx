import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';

import './Modal.css';

export default function Modal({ children, open, delay=1, className='' }) {
  const dialogRef = useRef();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) {
      setTimeout(() => dialog.showModal(), delay);
    }

    return () => dialog.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`dialog-modal ${className}`}>
      {children}
    </dialog>
    , document.getElementById('modal')
  );
}
