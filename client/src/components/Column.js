import React, {useState} from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';
import './board.css';
import Add from './Add';

const Column = ({ column, tasks, addCard }) => {  
  return (
    <div className='column'>
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              background: 'purple',
              padding: 4,
              width: 250,
              minHeight: 400,
            }}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Add
        buttonText="Add Card"
        onSubmit={(content) => addCard(column.id, content)}
      />  

    </div>
  );
};

export default Column;
