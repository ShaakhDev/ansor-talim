import React from "react";
import Header from './components/Header'
import Courses from './pages/Courses'
import News from './pages/News'
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import Comments from "./pages/Comments";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ContactLocation from "./pages/ContactLocation";
import Footer from "./pages/Footer";
import './App.css'

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <News />
      <Courses />
      <Teachers />
      <Comments />
      <Gallery />
      <Contact />
      <ContactLocation />
      <Footer />
    </div>
  )
}

