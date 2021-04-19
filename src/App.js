import './App.css';
import Desktop from './desktop';
import { useState, useEffect } from 'react';
import Mobile from './mobile';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { height, width } = useWindowDimensions();

  if (width > 1024) {
    return (
      <div>
        <Desktop/>
      </div>
    );
  }
  else{
    return(
      <div>
        <Mobile/>
      </div>
    )
  }
  
}

export default App;
