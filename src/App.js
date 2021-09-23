import React from "react";
import Header from './components/Header'
import Courses from "./pages/courses";
import Home from './pages/home';
import './App.css'

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Courses />

    </div>
  )
}

