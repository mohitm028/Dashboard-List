import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'

import App from './App.tsx'
import { store } from './app/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  
  </StrictMode>,
)
