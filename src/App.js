import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Skills from './Components/Skills';
import ProjectsSection from './Components/ProjectsSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
