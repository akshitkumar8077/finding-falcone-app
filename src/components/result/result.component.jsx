import React from 'react';

import './result.styles.css';

const ResultComponent = (status, planetName) => {
  return (
    <div className='result-wrapper'>
      {status === 'success' ? (
        <h1>Queen Al Falcone was found hiding on planet {planetName}</h1>
      ) : (
        <h1>Try again</h1>
      )}
    </div>
  );
};

export default ResultComponent;
