import React from 'react';
import Education from './Education';
import Jobs from './Jobs';

const About = () => {
  return (
    <div className='min-h-screen w-full bg-slate-50 text-slate-700 relative flex py-24 flex-col px-4 md:px-24 lg:px-36 gap-16'>
      <Education />
      <h2 className='text-5xl font-bold'>Work Experience</h2>
      <Jobs />
    </div>
  );
};

export default About;
