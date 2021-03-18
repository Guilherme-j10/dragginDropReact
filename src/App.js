import React, { useState } from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import InitialData from './initial-data';
import Column from './Column';

const ContainerGlobal = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

function App() {

  const [ Data, setData ] = useState(InitialData);

  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result;

    if(!destination) return;

    if(
      destination.index == source.index &&
      destination.droppableId == source.droppableId
    ) return ;

    if(source.droppableId !== destination.droppableId){
      
      const ColumOrigin = Data.columns[source.droppableId];
      const ArrayOrigin = Array.from(ColumOrigin.taskIds);

      const ColumnDestin = Data.columns[destination.droppableId];
      const ArrayDestin = Array.from(ColumnDestin.taskIds);

      ArrayOrigin.splice(source.index, 1);
      ArrayDestin.splice(destination.index, 0, draggableId);

      const newColumnOrigin = {
        ...ColumOrigin,
        taskIds: ArrayOrigin
      }

      const newColumnDestin = {
        ...ColumnDestin,
        taskIds: ArrayDestin
      }

      const UpdatePreSetState = {
        ...Data,
        columns: {
          ...Data.columns,
          [newColumnOrigin.id]: newColumnOrigin,
          [newColumnDestin.id]: newColumnDestin
        }
      };

      setData(UpdatePreSetState);

    }else{
      const columns = Data.columns[source.droppableId];
      const newArrayTasks = Array.from(columns.taskIds);
      newArrayTasks.splice(source.index, 1);
      newArrayTasks.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...columns,
        taskIds: newArrayTasks
      }
  
      const UpdatePreSetState = {
        ...Data,
        columns: {
          ...Data.columns,
          [newColumn.id]: newColumn
        }
      };
    
      setData(UpdatePreSetState);
    }

    console.log(source, destination);
  }

  return (
    <ContainerGlobal>
      <DragDropContext 
          onDragEnd={onDragEnd}
        >
          {
            Data.columnOrder.map(columnId => {
              const column = Data.columns[columnId];
              const tasks = column.taskIds.map(taskIds => Data.tasks[taskIds]);
        
              return (
                <>
                  <Column key={column.id} column={column} tasks={tasks} />
                </>
              );
            })
          }
        </DragDropContext>
    </ContainerGlobal>
  );
}

export default App;
