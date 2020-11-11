import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AboutMe from "./components/AboutMe";
import Experience from './components/Experience';
import Nav from "./components/Nav";
import Contact from './components/Contact';

import GlobalStyle from './GlobalStyles';


function App() {

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <ScrollToTop /> 
        <Nav />
        <Switch>
          <Route exact path='/' component={AboutMe} />
          <Route path='/experience' component={Experience} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
