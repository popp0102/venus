import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Venus, { CosmicText } from '../lib/index';

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <CosmicText className="cosmic-title" text="HI There" randomColor/>
</StrictMode>,
)
