import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import appStore, { StoreProvider } from './store/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider value={appStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>
)
