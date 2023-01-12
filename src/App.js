import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from 'react-scroll-to-top';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Social from './components/Social';
import About from './components/About';
import Navbar from './components/Navbar';

AOS.init();

function App() {
  return (
    <div className='bg-white'>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Social></Social>
      <ScrollToTop smooth style={{backgroundColor:"white", borderRadius:'50%'}}/>
      <Toaster />
    </div>
  );
}

export default App;
