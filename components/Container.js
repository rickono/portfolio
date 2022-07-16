import React from 'react';

const Container = ({ classes, children }) => {
  return (
    <div className={`px-6 sm:px-8 md:px-12 lg:px-20 ${classes}`}>
      {children}
    </div>
  );
};

export default Container;
