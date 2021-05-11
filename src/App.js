import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto.js';
import FullName from './Components/Profile/FullName.js';
import Adress from './Components/Profile/Adress';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
      </div>
      
    </div>
  );
}

export default App;
