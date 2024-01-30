import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Qualities from './components/qualities';
import Section from './components/section';
import Gallery from './components/gallery';
import Footer from './components/footer';
import { useEffect, useState } from 'react';
import Mission from './components/mission';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps

useEffect(() => {
    setIsLoaded(true);
}, []);

useEffect(() => {
    if (isLoaded) {
        setIsPageLoaded(true);
    }
}, [isLoaded]);
  
  const Loading = () => (
    <div className='bg-bg fixed z-30 h-screen w-screen flex justify-center items-center'>
      {/* <img src="/logo.png" className='h-28' alt="" /> */}
    </div>
  )

  return (
    <div className="App font-[Poppins]">
      {
        !isPageLoaded && <Loading/>
      }
      <Navbar/>
      <Hero/>
      <About/>
      <Qualities/>
      <Mission/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
