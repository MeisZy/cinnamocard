import React, { useState, useEffect } from 'react';
import './Panels.css';

function Panels() {
  const [showCinnArrow, setShowCinnArrow] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [babuImage, setBabuImage] = useState(null);
  const [cinnArrowImage, setCinnArrowImage] = useState(null);
  const [zyImage, setZyImage] = useState(null);

  // Lazy load images on mount
  useEffect(() => {
    // Lazy load CinnArrow after 2.5 seconds
    const timer = setTimeout(() => {
      import('../assets/cinnarrows.png').then(image => setCinnArrowImage(image.default));
    }, 2500);

    // Load Babu image immediately
    import('../assets/Babu.png').then(image => setBabuImage(image.default));

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  const handleCinnArrowClick = () => {
    setShowContent(true);
    import('../assets/panel.png').then(image => setBackgroundImage(image.default));
    import('../assets/zy.png').then(image => setZyImage(image.default));
  };

  return (
    <div className='parent'>
      <div className='cellproper'>
        <div className='cells'>
          <div className='board1'>
            <p>Happy</p>
          </div>
          <div className='board2'>
            <p>Birthday,</p>
          </div>
          <div className='board3 lastchild'>
            <p style={{ color: '#4cb4f0' }}>Zyreel!</p>
          </div>
        </div>
      </div>
      <div className='selectionsproper'>
        <a href="https://facebook.com/regiel.garrido">
          {babuImage && <img src={babuImage} alt="Babu" />}
        </a>
      </div>
      {showCinnArrow && (
        <div className="cinnarrow" onClick={handleCinnArrowClick}>
          {cinnArrowImage && <img src={cinnArrowImage} alt="CinnArrow" />}
        </div>
      )}
      <div className={`contentproper ${showContent ? 'show' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
        {showContent && (
          <>
            <p>HI ZY! Happy 22nd Birthday! Wala akong maisip na sabihin ano hahah stay what you are...</p>
            {zyImage && <img src={zyImage} alt="Zy" />}
          </>
        )}
      </div>
    </div>
  );
}

export default Panels;
