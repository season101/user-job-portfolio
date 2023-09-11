import React from 'react';
import Duties from './Duties';

const JobInfo = ({ company, dates, duties, id, order, title }) => {
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      {/* <p>{order}</p> */}
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
