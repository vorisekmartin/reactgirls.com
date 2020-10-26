import React, { useState, useCallback, useEffect } from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Navbar, Footer, SocialMobile } from './components';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Mentoring from './pages/Mentoring/Mentoring';
import Academy from './pages/Academy/Academy';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/reusable/ScrollToTop';
import { ThemeProvider } from './ThemeContext';


function App() {
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };

  const isBreakpoint = useMediaQuery(960)

  return (
    <ThemeProvider>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/onas' exact component={About} />
          <Route path='/mentoring' exact component={Mentoring} />
          <Route path='/akademie' exact component={Academy} />
          <Route path='/kontakt' exact component={Contact} />
        </Switch>
        { isBreakpoint &&  
        <SocialMobile />
        }
        <Footer />
      </Router>
    </ThemeProvider>
    
  );
}

export default App;


