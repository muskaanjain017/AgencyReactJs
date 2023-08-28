import './App.css';
import Header from './Components/Header';
import KeyFeature from './Components/KeyFeature';
import Wework from './Components/Wework';
import Contact from './Components/Contact';
import OurTeam from './Components/OurTeam';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Wework></Wework>
        <KeyFeature></KeyFeature>
        <Contact></Contact>
        <OurTeam></OurTeam>
        <Footer></Footer>
    </div>
  );
}

export default App;
