import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { StudentStore } from "./App/StudentStore";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={StudentStore}>
    <App />
    </Provider>
  </StrictMode>,
)
