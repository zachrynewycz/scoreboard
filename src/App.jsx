import './App.css';
import Period from './Period';
import Score from './Score';
import Timer from './Timer';

const App = () => {
  return (  
    <div className="app">
      <Timer/>
      <div className='flex-items'>
        <div className='container'>
          <h2 id="label">HOME</h2>
          <Score/>
        </div>

        <div className='container'>
          <h2 id="label2">PERIOD</h2>
          <Period/>
        </div>
        
        <div className='container'>
          <h2 id='label'>GUEST</h2>
          <Score/>
        </div>
      </div>
    </div>
  );
}
 
export default App;