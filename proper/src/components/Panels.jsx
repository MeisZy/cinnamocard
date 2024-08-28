import { useState, useEffect } from 'react';
import './Panels.css';
import Babu from '../assets/Babu.png';
import Zy from '../assets/zy.png';
import CinnArrow from '../assets/cinnarrows.png';
import MailImage from '../assets/mail.png';
import PanelImage from '../assets/panel.png';

function Panels() {
  const [showCinnArrow, setShowCinnArrow] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(MailImage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCinnArrow(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleCinnArrowClick = () => {
    setShowContent(true);
    setBackgroundImage(PanelImage);
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
            <img src={Babu} alt="Babu"/>
          </a>
      </div>
      <div className="cinnarrow" onClick={handleCinnArrowClick}>
        <img src={CinnArrow} alt="CinnArrow"/>
      </div>
      <div className={`contentproper ${showContent ? 'show' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>

        <p className={showContent ? 'show' : ''}>
          HI ZY! Happy 22nd Birthday! 
          Wala akong maisip na sabihin ano hahah stay what you are, 
          sana magbago ka na tapos ayon lang always do your best! (wag mo sanang makita mga nasa c.ai ko salamat)
        </p>
        <img src={Zy} alt="Zy" className={showContent ? 'show' : ''} />
      </div>
    </div>
  );
}

export default Panels;
