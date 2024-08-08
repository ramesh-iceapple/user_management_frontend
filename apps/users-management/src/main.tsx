import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './app/app';
import customTheme from './app/customTheme';
import { store } from './app/store';
import './index.css'
import setupAxios from 'libs/iceapple/src/lib/utils/fetchUtils';
import { setCanRedirectToSignIn } from './app/redux-modules/slices/auth';
import { IntlWrapper } from 'libs/iceapple/src/lib/utils/IntlWrapper';

setupAxios(store, setCanRedirectToSignIn);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <IntlWrapper>
      <Provider store={store}>
        <ThemeProvider theme={customTheme}>
          <BrowserRouter basename='/users-management'>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </IntlWrapper>
  </StrictMode>
);
