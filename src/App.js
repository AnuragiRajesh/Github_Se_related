import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Vikash from './Components/classcomponents';
import Profile2 from './Components/functioncomponents';
import Luck from './Components/Props';
import Mystates from './Components/States';
import Event from './Components/Eventlistioner';
import Got from './Components/state2';
import List from './Components/listsandkeys0';
import List1 from './Components/keysandlist';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Components</h1> */}
        {/* <Home/> */}
        {/* <Profile/> */}
        {/* <Profile2/> */}
        {/* <Luck text={{name:"SaiKiran",age:"21"}} data="this is my data"/> */}
        {/* <Mystates/> */}
        
        {/* <Event/> */}
        {/* <Vikash/> */}
        {/* <Got/> */}
        <List1/>
    
      </header>
    </div>
  );
}

export default App;
