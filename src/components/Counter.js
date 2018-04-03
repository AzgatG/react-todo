import React from 'react';

const Counter = ({count}) => {
  return (
    <div style={{paddingLeft: '30px'}}>Осталось: {count}</div>
  );
};

export default Counter;