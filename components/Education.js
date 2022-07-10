import React from 'react';
import Image from 'next/image';
import ClassCard from './ClassCard';
import MITSvg from '../public/MIT.svg';
import { Icon } from '@iconify/react';

const Education = () => {
  return (
    <div>
      <h2 className='text-5xl font-bold'>Academics</h2>
      <div className='grid grid-cols-1 lg:grid-cols-5 w-full gap-10'>
        <div className='col-span-2 flex items-center justify-center'>
          <Image src={MITSvg} width='100' height='50' alt='MIT logo' />
        </div>
        <div className='col-span-3'>
          <h3 className='text-3xl font-bold'>
            Massachusetts Institute of Technology
          </h3>
          <h2 className='text-xl font-bold'>Major: Computer Science (6-3)</h2>
          <h2 className='text-xl font-bold'>
            Minor: Brain and Cognitive Sciences (9)
          </h2>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='flex flex-col gap-1 rounded-lg drop-shadow-lg bg-white p-6'>
          <h3 className='text-2xl font-bold mb-2'>Coursework</h3>
          {[1, 2, 3, 4].map((num) => (
            <p
              key={num}
              course='6.031: Software Construction'
              className='pl-2 pr-6 py-1 before:-z-50 relative cursor-pointer before:-z-1 before:w-0 before:transition-all before:bg-blue-500 hover:text-slate-50 transition-all before:rounded-md hover:before:w-full before:h-full before:absolute before:top-0 before:left-0 before:text-white'
            >
              6.031: Software Construction
              <Icon
                icon='akar-icons:chevron-right'
                className='absolute text-white right-1 top-1/2 -translate-y-1/2'
              />
            </p>
          ))}
        </div>
        <div className='col-span-2'></div>
      </div>
    </div>
  );
};

export default Education;