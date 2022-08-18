import React, { useState, useRef } from 'react';
import Engineers from '../public/mitsports.png';
import PSK from '../public/psk.png';
import Image from 'next/image';

const LeadershipCard = ({ image, title, positions, description }) => {
  return (
    <div className='bg-white rounded-lg p-6 shadow-xl'>
      <div className='flex flex-row items-center gap-4 mb-3'>
        <Image src={image} width='70' height='70' alt={title} />
        <div>
          <h2 className='text-2xl font-bold'>{title}</h2>
          <h3 className='text-lg font-bold italic'>{positions.join(', ')}</h3>
        </div>
      </div>
      <div className='flex flex-col gap-3 py-3 px-3 text-md'>
        {description.map((desc) => (
          <p key={desc}>{desc}</p>
        ))}
      </div>
    </div>
  );
};
const Leadership = () => {
  return (
    <>
      <h2 className='text-5xl font-bold'>Leadership</h2>
      <div className='grid gap-8 lg:grid-cols-2'>
        <LeadershipCard
          image={Engineers}
          title='MIT Varsity Lightweight Crew'
          positions={['NCAA D1 Captain']}
          description={[
            'Elected captain of the MIT Varsity Lightweight Crew team.',
            'Represented MIT in the first varsity 8 at the IRA National Championships.',
          ]}
        />
        <LeadershipCard
          image={PSK}
          title='Phi Sigma Kappa, Omicron Chapter'
          positions={['Vice President', 'Recruitment Chair', 'Social Chair']}
          description={[
            'Elected vice president of my fraternity of 75 people, responsible for maintaining the physical house. Assigned chores to members, and coordinated with contractors, electricians, plumbers, etc.',
            'Elected recruitment chair, organized a full one-week $35,000 event and led daily rush meetings with the entire fraternity (50+ members).',
          ]}
        />
      </div>
    </>
  );
};

export default Leadership;
