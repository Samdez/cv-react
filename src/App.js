import { Route, Switch, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { AnimatePresence } from 'framer-motion';

import AboutMe from "./components/AboutMe";
import Experience from './components/Experience';
import Nav from "./components/Nav";
import Contact from './components/Contact';

import GlobalStyle from './GlobalStyles';


function App() {
  const location = useLocation();
  function ScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  return (
    <div className="App">
      <GlobalStyle />
        <ScrollToTop />
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={AboutMe} />
            <Route path='/experience' component={Experience} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
