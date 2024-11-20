import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portrait from './components/Portrait/Portrait';
import welcomeBkg from './assets/welcome_bkg.jpg';

function App() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <div className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `url(${welcomeBkg})` }}></div>
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center">
        <Portrait />
        <main className="flex-grow flex flex-col items-center justify-center">
          <h1>Just a Random text for now</h1>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;