import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

const Project = ({ image, name, icons, blurb, idx, keywords }) => {
  const [mousePosition, setMousePosition] = useState({});
  const ref = useRef();
  const odd = idx % 2 === 1;
  const handleMouseMove = (e) => {
    console.log(mousePosition);
    setMousePosition(getRelativeCoordinates(e, ref.current));
  };
  const MotionImage = motion(
    <Image src={image} alt={`Preview of the ${name} app.`} />,
    { forwardMotionProps: true }
  );
  return (
    <div className={`relative ${odd && 'flex flex-row-reverse'}`} ref={ref}>
      <div className='w-9/12 relative' onMouseMove={handleMouseMove}>
        <motion.div
          className='w-full h-full bg-black absolute top-4 -right-10'
          animate={{
            right: mousePosition.centerX * 30,
            top: mousePosition.centerY * 30,
          }}
        ></motion.div>
        <Image
          src={image}
          alt={`Preview of the ${name} app.`}
          animate={{
            right: mousePosition.centerX * -30,
            top: mousePosition.centerY * -30,
          }}
        />
      </div>
      <div
        className={`absolute w-5/12 top-10 ${
          odd ? 'left-0' : 'right-0'
        } col-span-1 z-10 bg-gray-900 bg-opacity-60 p-8 rounded-lg backdrop-blur-sm drop-shadow-md`}
      >
        <p>{keywords}</p>
        <h1 className='font-bold text-3xl mb-2'>{name}</h1>
        <p>{blurb}</p>
        <div className='flex gap-3 my-3 items-center'>
          {icons.map((icon) =>
            typeof icon === 'string' ? (
              <Icon icon={icon} key={icon} height='40' width='40' />
            ) : (
              icon
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
