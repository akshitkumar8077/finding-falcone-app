import React from 'react';

import './result.styles.css';

const ResultComponent = (status, planetName) => {
  return (
    <div className='result-container'>
      {status === 'success' ? (
        <div>
          <h1>Success!</h1>
          <p>Congratulation on finding Falcone</p>
          <p>King Shan is mighty pleased</p>
          <p>{planetName}</p>
        </div>
      ) : (
        <div>
          <h1>Not found!</h1>
          <p>Queen Al Falcone was not on these planets.</p>
        </div>
      )}
    </div>
  );
};

export default ResultComponent;
