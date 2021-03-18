import React, { useState } from 'react';
import styled from 'styled-components';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  width: 20%;
  margin: 5px;
  padding: 8px;
  border: solid 1px lightgray;
  border-radius: 2px;
`;
const Title = styled.h2`
  padding: 8px;
  color: #444;
  font-family: Arial;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TaskList = styled.div`
  padding: 8px;
`;

const Column = (props) => {

  const [ drag, setDrag ] = useState(false);

  return (
    <Container>
      <Title>
        { props.column.title }
        <button style={{backgroundColor: drag == true ? 'blue' : 'red'}} onClick={() => {
          if(drag == true){
            setDrag(false);
          }else{
            setDrag(true);
          }
        }}> draggable </button> 
      </Title>
      <Droppable droppableId={props.column.id} >
        {(provided, snapshot) => (
          <TaskList 
            ref={provided.innerRef}
            {...provided.droppableProps} 
            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
          >
            { props.tasks.map((task, index) => {
              return <Task key={task.id} drag={drag} index={index} task={task} />
            })}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}

export default Column;