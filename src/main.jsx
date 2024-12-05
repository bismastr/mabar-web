import './index.css'
import App from './App.jsx'
import gamingSessionsReducer from './reducers/gamingSessionsReducer.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'


const store = configureStore({
  reducer: {
    gamingSessions: gamingSessionsReducer
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>

)
