import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import Entry from './app/Entry.tsx';
import './assets/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Entry />
  </BrowserRouter>,
);
