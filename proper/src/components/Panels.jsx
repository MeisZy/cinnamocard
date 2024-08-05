import './Panels.css';
//import Panel from '../assets/panel.png';
//import Pole from '../assets/panel_pole.png';

function Panels() {
  return (
    <>
        <div className='proper'>
          <div className="cell">
                <div className='board'>
                  <p>Happy</p>
                </div>
          </div>
          <div className="cell">
                <div className='board'>
                  <p>Birthday,</p>
                </div>
          </div>
          <div className="cell">
                <div className='board'>
                  <p style={{color:'#4cb4f0'}}>(Name!)</p>
                </div>
          </div>
        </div>
    </>
  );
}

export default Panels;
