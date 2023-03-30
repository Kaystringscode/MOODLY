// import './App.css';
import Page1 from './components/Landing Page/Page1';
import Musicquote from './components/MusicQuotes/Musicquotes';
import SearchBar from './components/search/SearchBar';
import Musicapi from "./components/Musicapi/Musicapi"
// import Submit from "./components/Submit"
// import Dropdown from './components/Dropdown /dropdown';


//general function and layout of the Moodly app//
function App() {
  return (
    <div>
      <Page1 />
      <Musicquote />
      {/* <Submit /> */}
      {/* <SearchBar />  */}
       <Musicapi />
  
    </div>
  );
}
 
export default App;
