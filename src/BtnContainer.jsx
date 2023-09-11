import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const BtnContainer = ({ companies, setCurrentJob }) => {
  return (
    <div className="btn-container">
      {companies.map((company, index) => (
        <button
          key={uuidv4()}
          className="job-btn"
          onClick={() => setCurrentJob(index)}
        >
          {company}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
