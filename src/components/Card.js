import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ id, content, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{content}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
