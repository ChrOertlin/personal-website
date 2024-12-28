import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Resume from './pages/Resume';


function App() {
  return (
    <div className="min-h-sreen w-full flex flex-col sm:flex-row pt-16">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

    </div>
  );
}

export default App;