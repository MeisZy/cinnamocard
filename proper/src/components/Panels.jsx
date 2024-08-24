import { useState, useEffect } from 'react';
import './Panels.css';
import CinnArrow from '../assets/cinnarrows.png';

function Panels() {
  const [clickedItemIndex, setClickedItemIndex] = useState(null);
  const [showSelections, setShowSelections] = useState(false);
  const [showCinnArrow, setShowCinnArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCinnArrow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (index) => {
    setClickedItemIndex(index);

    setTimeout(() => {
      setClickedItemIndex(null);
    }, 1000); 
  };

  const handleArrowClick = () => {
    setShowSelections(true);
  };

  return (
    <>
      <div className='cellproper'>
        <div className='cells'>
          <div className='board1' style={{ transform: "translateY(-300px)" }}>
            <p>Happy</p>
          </div>
          <div className='board2' style={{ transform: "rotate(-45deg)", transform: "translateY(-300px)" }}>
            <p>Birthday,</p>
          </div>
          <div className='board3' style={{ transform: "translateY(-300px)" }}>
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
    </>
  );
}

export default Panels;
