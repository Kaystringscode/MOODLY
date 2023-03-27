import './App.css';
import Page1 from './components/Landing Page/Page1';
import Header from './components/Header';
import Body from './components/Body';
import EraSelector from './components/ERA/EraSelector';
import Spotify from './components/Api/spotify';
import Musicquote from './components/MusicQuotes/Musicquotes';
// import Dropdown from './components/Dropdown /dropdown';



function App() {
  return (
    <div>
      <Page1 />
      <Musicquote />
    {/* <Header />
    <Body />
    <EraSelector />
    <Spotify /> */}
    </div>
  );
}
 
export default App;
