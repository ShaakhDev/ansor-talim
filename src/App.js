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
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>

        <Home />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>

        <News />
      </Suspense>

      <Suspense fallback={<div>Loading</div>}>

        <Courses />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>

        <Teachers />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>

        <Comments />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>

        <Gallery />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>

        <Contact />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>

        <ContactLocation />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>

        <Footer />
      </Suspense>
    </div>

  )
}

