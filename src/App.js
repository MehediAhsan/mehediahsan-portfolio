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
import Poster from './components/Poster';

AOS.init();

function App() {
  return (
    <div className='font-primary bg-gradient-to-r from-[#000808] via-[#000101] to-[#000808] overflow-hidden'>
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      <Poster></Poster>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Youtube></Youtube>
      <Contact></Contact>
      <Social></Social>
      <ScrollToTop smooth={true} height='24' color='#fff' style={{backgroundColor:"#3697af", borderRadius:'100%', padding:'6px'}}/>
      <Toaster />
    </div>
  );
}

export default App;
