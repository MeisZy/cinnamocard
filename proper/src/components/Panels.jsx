import './Panels.css';
import CinnArrow from '../assets/cinnarrows.png'
//import Panel from '../assets/panel.png';
//import Pole from '../assets/panel_pole.png';

function Panels() {
  return (
    <>
        <div className='cellproper'>
          <div className='cells'>
            <div className='board1' style={{transform:"translateY(-300px)"}}>
              <p>Happy</p>
            </div>                                                     
            <div className='board2' style={{transform:"rotate(-45deg)",transform:"translateY(-300px)"}}>
              <p>Birthday,</p>
            </div>
            <div className='board3' style={{transform:"translateY(-300px)"}}>
              <p style={{color:'#4cb4f0'}}>Name</p>
            </div>
          </div>
        </div>
        <div className='lowerguide'>
          <a href="https://youtube.com">
            <img src={CinnArrow}></img>
          </a>
        </div>
        <div className='selectionsproper'>
          <div className='items'>test 1</div>
          <div className='items'>test 1</div>
          <div className='items'>test 1</div>
          <div className='items'>test 1</div>
        </div>
    </>
  );
}

export default Panels;
