import React from 'react';

const Card = ({ task }) => {
  return (
    <div className='card'>
      {task.content}
    </div>
  );
};

export default Card;
