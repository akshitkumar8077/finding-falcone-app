import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../../components/custom-button/custom-button.components';

import './home-page.styles.css';

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='home-page__banner'>
        <h1>Welcome to the Planet of Lengaburu</h1>
        <p>
          In the distant distant galaxy of Tara B, after the recent war with
          neighbouring planet Falicornia, King Shan has exiled the Queen of
          Falicornia for 15 years. Queen Al Falcone is now in hiding. But if
          King Shan can find her before the years are up, she will be exiled for
          another 15 years….
        </p>
        <p>
          Queen Al Falcone is now in hiding. But if King Shan can find her
          before the years are up, she will be exiled for another 15 years….
        </p>
        <Link to='/select' className='button-container'>
          <CustomButton>Find Falcone!</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
