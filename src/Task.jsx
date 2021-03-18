import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  padding: 8px;
  margin-bottom: 5px;
  border-radius: 2px;
  background-color: ${props => props.isDraggin == true ? 'green' : 'red'};
  border: solid 1px lightgray;
`;
const Title = styled.h3`
  font-family: Arial;
  color: #555;
`;

const Task = (props) => {
  return (
    <>
      {props.drag == true ? (
        <Draggable draggableId={props.task.id} index={props.index}>
          {(provided, snapshot) => (
            <Container
              isDraggin={snapshot.isDragging}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              {props.task.content}
            </Container>
          )}
        </Draggable>
      ) : (
        <Container>
          {props.task.content}
        </Container>
      )}
    </>
  );
}

export default Task;