import React from "react";
import Header from './components/Header'

import News from './pages/news'
import Home from './pages/home';
import './App.css'

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <News />

    </div>
  )
}

