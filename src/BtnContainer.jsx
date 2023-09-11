import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const BtnContainer = ({ companies, setCurrentJob, currentJob }) => {
  return (
    <div className="btn-container">
      {companies.map((company, index) => (
        <button
          key={uuidv4()}
          className={index === currentJob ? 'job-btn active-btn' : 'job-btn'}
          onClick={() => setCurrentJob(index)}
        >
          {company}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
