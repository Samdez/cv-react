import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
// import Nav from "./components/Nav";

import GlobalStyle from './GlobalStyles';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutMe />
      {/* <Experience />
      <Contact /> */}
    </div>
  );
}

export default App;
