import './Panels.css';
//import Panel from '../assets/panel.png';
import Pole from '../assets/panel_pole.png';

function Panels() {
  return (
    <>
        <div className='proper'>
          <div className="cell">
              <div >
                <img src={Pole} className='panelpole'/>
              </div>
          </div>
          <div className="cell">
              <div >
                <img src={Pole} className='panelpole'/>
              </div>
          </div>
        </div>
    </>
  );
}

export default Panels;
