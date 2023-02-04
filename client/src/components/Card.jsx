import React from 'react';
import Tilt from 'react-parallax-tilt';

import styles from '../styles';
import { allCards } from '../assets';

const generateRandomCardImage = () => allCards[Math.floor(Math.random() * (allCards.length - 1))];

const img1 = generateRandomCardImage();
const img2 = generateRandomCardImage();

const Card = ({ card, title, restStyles, cardRef, playerTwo }) => (
  <Tilt>
    <div ref={cardRef} className={`relative sm:w-[260px] w-[220px] sm:h-[335px] h-[280px] z-0 transition-all ${restStyles}`} >
      <img src={playerTwo ? img2 : img1} alt="ace_card" className={styles.cardImg} />

      <div className={`absolute sm:w-[40px] w-[32px] sm:h-[40px] h-[32px] rounded-[25px]  sm:left-[21.2%]  ${styles.flexCenter}`}>
        <p className='font-rajdhani text-[20px] font-bold text-yellow-400'>{card.att}</p>
      </div>
      <div className='font-rajdhani text-[20px] font-bold sm:right-[14.2%] right-[15%] flex items-center justify-center'>
        <p className='font-rajdhani text-[20px] font-bold text-red-700'>{card.def}</p>
      </div>

      <div className='absolute w-full bottom-[13.5%] left-3 flex items-center justify-center'>
        <p className='font-rajdhani font-semibold text-2xl text-white'>{title}</p>
      </div>
    </div>
  </Tilt>
);

export default Card;
