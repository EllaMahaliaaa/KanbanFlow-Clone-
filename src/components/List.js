import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';

const List = ({ id, title, cards }) => {
  return (
    <div className="list">
      <h2>{title}</h2>
      <Droppable droppableId={id}>
        {(provided) => (
          <div className="cards" ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((card, index) => (
              <Card key={card.id} id={card.id} content={card.content} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default List;
