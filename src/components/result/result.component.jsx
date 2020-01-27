import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { reset } from '../../redux/reset/reset.actions';

import CustomButton from '../custom-button/custom-button.components';

import './result.styles.css';

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(reset())
});

const ResultComponent = ({ response }) => {
  return (
    <div className='result-wrapper'>
      {response && response.status === 'success' ? (
        <div className='result-container'>
          <h1>Success!</h1>
          <p>Congratulation on finding Falcone</p>
          <p>King Shan is mighty pleased</p>
          <p>
            <strong>{response.planet_name}</strong>
          </p>
          <img
            src={require(`../../assets/planets/${response.planet_name}.png`)}
            alt={response.planet_name}
          />
          <Link onClick={() => reset()} to='/'>
            <CustomButton>START AGAIN</CustomButton>
          </Link>{' '}
        </div>
      ) : (
        <div className='result-container'>
          <h1>Not found!</h1>
          <p>Queen Al Falcone was not on these planets.</p>
          <Link onClick={() => reset()} to='/'>
            <CustomButton>RETRY</CustomButton>
          </Link>
        </div>
      )}
    </div>
  );
};

export default connect(null, mapDispatchToProps)(ResultComponent);
