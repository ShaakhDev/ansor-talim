import React from "react";
import Header from './components/Header'
import Courses from './pages/Courses'
import News from './pages/News'
import Home from './pages/Home';
import './App.css'

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <News />
      <Courses />

    </div>
  )
}

