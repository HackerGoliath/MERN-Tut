import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Logout from './components/Logout';
import ErrorPage from './components/ErrorPage';
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer/UseReducer';
// import ToggleData from './components/ToggleData';

// 1: contextAPI
export const UserContext = createContext();
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<ErrorPage />} />
      {/* <Route path="/toggle" element={<ToggleData />} /> */}
    </Routes>
  )
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  )
}

export default App
