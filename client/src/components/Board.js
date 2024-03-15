import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import "./board.css"
import Add from './Add';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Task 1' },
    'task-2': { id: 'task-2', content: 'Task 2' },
    'task-3': { id: 'task-3', content: 'Task 3' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);
  const [newCardInput, setNewCardInput] = useState('');
  const [newColumnInput, setNewColumnInput] = useState('');

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
  
    // If there is no destination, or the destination is the same as the source,
    // or the draggable is dropped back to its original position, do nothing
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }
  
    const startColumn = data.columns[source.droppableId];
    const endColumn = data.columns[destination.droppableId];
  
    // Remove the dragged task from its original column
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };
  
    // Add the dragged task to the new column
    const endTaskIds = Array.from(endColumn.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newEndColumn = {
      ...endColumn,
      taskIds: endTaskIds,
    };
  
    // Update the state with the new column order and column data
    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStartColumn.id]: newStartColumn,
        [newEndColumn.id]: newEndColumn,
      },
    };
  
    setData(newState);
  };
  

  const addCard = (columnId, content) => {
    //create an id for tast aka card
    const newTaskId = `task-${Object.keys(data.tasks).length + 1}`;
    const newTasks = {
      ...data.tasks,
      [newTaskId]: { id: newTaskId, content },
    };
    //add card to column at the end
    const newColumns = {
      ...data.columns,
      [columnId]: {
        ...data.columns[columnId],
        taskIds: [...data.columns[columnId].taskIds, newTaskId],
      },
    };
    //updates the data using setData
    setData({
      ...data,
      tasks: newTasks,
      columns: newColumns,
    });
  };

  const addColumn = (title) => {
    //create an id for column
    const newColumnId = `column-${Object.keys(data.columns).length + 1}`;
    //add column to the column list
    const newColumns = {
      ...data.columns,
      [newColumnId]: {
        id: newColumnId,
        title,
        taskIds: [],
      },
    };
    //update the data using setData
    setData({
      ...data,
      columns: {
        ...newColumns,
      },
      columnOrder: [...data.columnOrder, newColumnId],
    });
  };

  return (
    <div className='board-col'>
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} addCard={addCard}/>;
        })}
      </DragDropContext>
      <Add
        buttonText="Add Column"
        onSubmit={(title) => addColumn(title)}
      />

    </div>
  );
};

export default KanbanBoard;
