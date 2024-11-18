import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <h1>Just a Random text for now</h1>
      </main>
      <Footer />
    </div>
  );
}


export default App
