import React from 'react';

import './result.styles.css';

const ResultComponent = ({ response }) => {
  return (
    <div className='result-container'>
      {response && response.status === 'success' ? (
        <div>
          <h1>Success!</h1>
          <p>Congratulation on finding Falcone</p>
          <p>King Shan is mighty pleased</p>
          <p>{response.planet_name}</p>
          <img
            src={require(`../../assets/planets/${response.planet_name}.png`)}
            alt={response.planet_name}
          />
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
