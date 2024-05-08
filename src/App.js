import './App.css';

import Nav from './Components/Nav'
import Main from './Components/Main';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
