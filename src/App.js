// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components
import Navigation from './components/Navigation';

// Sections
import Hero from './components/Hero';
import Farming from './components/Farming';
import ProcessingExport from './components/ProcessingExport';

function App() {
  return (
    <>
    
      <Navigation />
      <Hero />
      <Farming />
      <ProcessingExport />
     
    </>
  );
}

export default App;
