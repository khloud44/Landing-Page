import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Details/>
    </div>
  );
}

export default App;
