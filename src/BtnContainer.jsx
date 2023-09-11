import React from 'react';

const BtnContainer = ({ companies }) => {
  return (
    <div className="btn-container">
      {companies.map((company, index) => (
        <button key={index} className="job-btn">
          {company}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
