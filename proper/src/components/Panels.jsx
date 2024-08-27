  import { useState, useEffect } from 'react';
  import './Panels.css';
  import CinnArrow from '../assets/cinnarrows.png';
  import Arrow from '../assets/arrowup.png';

  function Panels() {
    const [clickedItemIndex, setClickedItemIndex] = useState(null);
    const [showSelections, setShowSelections] = useState(false);
    const [showCinnArrow, setShowCinnArrow] = useState(false);
    const [animateDisplayIndex, setAnimateDisplayIndex] = useState(null);
    const [showContent, setShowContent] = useState(false); // New state

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowCinnArrow(true);
      }, 2500);

      return () => clearTimeout(timer);
    }, []);

    const handleClick = (index) => {
      setClickedItemIndex(index);
      setAnimateDisplayIndex(index);

      setTimeout(() => {
        setClickedItemIndex(null);
        setAnimateDisplayIndex(null);
      }, 5000); 
    };

    const handleArrowClick = () => {
      setShowSelections(true);
    };

    const handleDisplayClick = () => {
      setShowContent(prev => !prev); 
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
              <p style={{ color: '#4cb4f0' }}>(name)</p>
            </div>
          </div>
        </div>
        <div className={`lowerguide ${showCinnArrow ? 'visible' : ''}`}>
          <a href="#" onClick={handleArrowClick}>
            <img src={CinnArrow} alt="CinnArrow"></img>
          </a>
        </div>
        <div className={`selectionsproper ${showSelections ? 'visible' : ''}`}>
          {[0].map(index => (
            <a href="#"
              key={index}
              className={`items ${clickedItemIndex === index ? 'spin' : ''}`}
              onClick={() => handleClick(index)}>
            </a>
          ))}
        </div>
        <div 
          className={`displayproper ${showSelections ? 'visible' : ''}`} 
          onClick={handleDisplayClick} 
        >
          {[0].map(index => (
            <a href="#"
              key={index}
              className={`displayitems ${animateDisplayIndex === index ? 'animate' : ''}`}
            >
              <a>
                <img src={Arrow}/>
              </a>
            </a>
          ))}
        </div>
          <div className={`contentproper ${showContent ? 'visible' : ''}`}> 
            <div className='texts'>test</div>
          </div>
      </>
    );
  }

  export default Panels;
