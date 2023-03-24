import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import EraSelector from './components/ERA /EraSelector';
import Spotify from './components/Api/spotify';
// import Dropdown from './components/Dropdown /dropdown';



function App() {
  return (
    <div>
    <Header />
    <Body />
    <EraSelector />
    <Spotify />
    </div>
  );
}
 
export default App;
