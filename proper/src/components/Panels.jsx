import './Panels.css';
//import Panel from '../assets/panel.png';
//import Pole from '../assets/panel_pole.png';

function Panels() {
  return (
    <>
        <div className='cellproper'>
          <div className='cells'>
            <div className='board1'>
              <p>Happy</p>
            </div>                                                     
            <div className='board2' style={{transform:"rotate(-45deg)",transform:"translateY(-300px)"}}>
              <p>Birthday,</p>
            </div>
            <div className='board3' >
              <p style={{color:'#4cb4f0'}}>Name</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default Panels;
