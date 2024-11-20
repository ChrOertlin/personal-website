import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WelcomeMain from './components/WelcomeMain/WelcomeMain';

function App() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <WelcomeMain />
      <Footer />
    </div>
  );
}

export default App;