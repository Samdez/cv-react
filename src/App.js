import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";

import GlobalStyle from './GlobalStyles';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route path='/' component={AboutMe} />
          {/* <Experience />
        <Contact /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
