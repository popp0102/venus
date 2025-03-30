import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Venus from '../lib/index';

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <Venus />
</StrictMode>,
)
