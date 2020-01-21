import React from 'react';

import './footer.styles.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <span>
        Coding problem -{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          title='Geektrust'
          href='http://www.geektrust.in/coding-problem/frontend/space'
        >
          www.geektrust.in/coding-problem/frontend/space -
        </a>
      </span>
    </div>
  );
};

export default Footer;
