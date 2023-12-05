/* eslint-disable */
import './App.css';
import Header from './Components/Header/index';
import FlyCard from './Components/Fly-card/Fly-card';
import Filter from './Components/Filter/Filter';
import Btn from './Components/Button/index';

function App() {
  
    return (
      <div className="App">
       <Header/>
       <Filter/>
       <FlyCard/>
       <Btn/>
      </div>
    );
  }

export default App;