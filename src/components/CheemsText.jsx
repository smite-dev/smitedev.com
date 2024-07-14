import cheems from '../assets/cheems.png';
import '../App.css';

function CheemsText() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={cheems} className="cheems-logo" alt="CHEEMS" />
        <div className="pesto">
            SMITE    
        </div>
      </div>
    </div>
  );
}

export default CheemsText;