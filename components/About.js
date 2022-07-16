import React from 'react';
import Container from './Container';
import Education from './Education';
import Jobs from './Jobs';
import Leadership from './Leadership';

const About = () => {
  return (
    <Container classes='bg-slate-50'>
      <div className='min-h-screen w-full text-slate-700 relative flex py-24 flex-col gap-16'>
        <Education />
        <Jobs />
        <Leadership />
      </div>
    </Container>
  );
};

export default About;
