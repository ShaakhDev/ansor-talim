import React, { lazy, Suspense } from "react";
import './App.css'
const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./pages/Home'))
const News = lazy(() => import('./pages/News'))
const Courses = lazy(() => import('./pages/Courses'));
const Teachers = lazy(() => import('./pages/Teachers'))
const Comments = lazy(() => import('./pages/Comments'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))
const ContactLocation = lazy(() => import('./pages/ContactLocation'))
const Footer = lazy(() => import('./pages/Footer'))

export default function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
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
    </Suspense>
  )
}

