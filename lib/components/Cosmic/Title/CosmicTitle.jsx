import CosmicText from '../Text/CosmicText';

import './CosmicTitle.css';

export default function CosmicTitle({ children }) {
  return (
    <CosmicText className="cosmic-title" text={children} randomColor/>
  );
}
