import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className='bg-white'>
      <Header></Header>
      <Banner></Banner>
      <Projects></Projects>
    </div>
  );
}

export default App;
