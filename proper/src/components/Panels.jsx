import { useState, useEffect } from 'react';
import './Panels.css';
import CinnArrow from '../assets/cinnarrows.png';
import DebuggerPic from '../assets/zy.png';

function Panels() {
  const [clickedItemIndex, setClickedItemIndex] = useState(null);
  const [showSelections, setShowSelections] = useState(false);
  const [showCinnArrow, setShowCinnArrow] = useState(false);
  const [animateDisplayIndex, setAnimateDisplayIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCinnArrow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (index) => {
    setClickedItemIndex(index);
    setAnimateDisplayIndex(index);

    // Reset animation after it's complete
    setTimeout(() => {
      setClickedItemIndex(null);
      setAnimateDisplayIndex(null);
    }, 1000); 
  };

  const handleArrowClick = () => {
    setShowSelections(true);
  };

  return (
    <>
      <div className='cellproper'>
        <div className='cells'>
          <div className='board1'>
            <p>Happy</p>
          </div>
          <div className='board2'>
            <p>Birthday,</p>
          </div>
          <div className='board3'>
            <p style={{ color: '#4cb4f0' }}>Name</p>
          </div>
        </div>
      </div>
      <div className={`lowerguide ${showCinnArrow ? 'visible' : ''}`}>
        <a href="#" onClick={handleArrowClick}>
          <img src={CinnArrow} alt="CinnArrow"></img>
        </a>
      </div>
      <div className={`selectionsproper ${showSelections ? 'visible' : ''}`}>
        {[0, 1, 2, 3].map(index => (
          <a href="#"
             key={index}
             className={`items ${clickedItemIndex === index ? 'spin' : ''}`}
             onClick={() => handleClick(index)}>
          </a>
        ))}
      </div>
      <div className={`displayproper ${showSelections ? 'visible' : ''}`}>
        {[0, 1, 2, 3].map(index => (
          <a href="#"
             key={index}
             className={`displayitems ${animateDisplayIndex === index ? 'animate' : ''}`}
          >
            {/* Replace with actual content or images */}
            <p>Item {index}</p>
          </a>
        ))}
      </div>
    </>
  );
}

export default Panels;
