import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Teams from './pages/Teams'
import Content from './pages/Content'
import Events from './pages/Events'
import Community from './pages/Community'
import About from './pages/About'
import Shop from './pages/Shop'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/content" element={<Content />} />
        <Route path="/events" element={<Events />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
