import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Project = ({
  image,
  name,
  icons,
  blurb,
  idx,
  keywords,
  github,
  link,
}) => {
  const odd = idx % 2 === 1;
  return (
    <div
      className={`relative flex flex-col items-center gap-4 ${
        odd ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className='w-full md:w-9/12 relative'>
        <Image src={image} alt={`Preview of the ${name} app.`} />
      </div>
      <div
        className={`relative md:absolute w-full md:w-5/12 top-3/4 md:-top-4 lg:top-10 ${
          odd ? 'md:left-0' : 'md:right-0'
        } col-span-1 z-10 bg-gray-900 bg-opacity-60 px-8 py-5 rounded-lg backdrop-blur-sm drop-shadow-md`}
      >
        <p>{keywords}</p>
        <h1 className='font-bold text-3xl mb-2'>{name}</h1>
        <p>{blurb}</p>
        <div className='flex gap-3 my-3 items-center'>
          {icons.map(([label, icon]) => {
            return (
              <div
                key={label}
                className='flex flex-col items-center justify-center gap-1'
              >
                {typeof icon === 'string' ? (
                  <Icon icon={icon} width='40' height='40' />
                ) : (
                  icon
                )}
                <p className='text-center text-xs'>{label}</p>
              </div>
            );
          })}
        </div>
        <div className='flex items-center gap-3 pt-3'>
          {github && (
            <a
              className='px-4 py-1 rounded-md text-white bg-gray-800 cursor-pointer hover:bg-gray-200 hover:text-gray-800 transition-all'
              href={github}
            >
              Code
            </a>
          )}
          {link && (
            <a
              className='px-4 py-1 rounded-md text-white bg-gray-800 cursor-pointer hover:bg-gray-200 hover:text-gray-800 transition-all'
              href={link}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
