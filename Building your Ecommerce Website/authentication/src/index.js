import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { TokenIdContextProvider } from './store/tokenId-context';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TokenIdContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TokenIdContextProvider>
);
