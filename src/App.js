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
import Youtube from './components/Youtube/Youtube';

AOS.init();

function App() {
  return (
    <div className='bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden'>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Youtube></Youtube>
      <Contact></Contact>
      <Social></Social>
      <ScrollToTop smooth style={{backgroundColor:"gray", borderRadius:'100%', paddingLeft:'5px'}}/>
      <Toaster />
    </div>
  );
}

export default App;
