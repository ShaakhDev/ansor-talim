import Home from './pages/home'
import News from './pages/news'
import Courses from './pages/courses'
import Teachers from './pages/teachers'
import Comments from './pages/comments'
import Gallery from './pages/gallery'
import ContactUs from './pages/contactUs'
import Footer from './pages/footer'
import Header from './components/Header'
function App() {
  return (
    <>
      <Header />
      <Home />
      <News />
      <Courses />
      <Teachers />
      <Comments />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
