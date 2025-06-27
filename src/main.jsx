import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import ChatBox from './Components/ChatBox.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/Home" element={<ProtectedRoute><App/></ProtectedRoute>}/> 
      <Route path="/ChatBox" element={<ProtectedRoute><ChatBox/></ProtectedRoute>}/> 
    </Routes>
   </Router>
  </StrictMode>
)
