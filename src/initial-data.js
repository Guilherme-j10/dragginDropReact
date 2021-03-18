const InitialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'take out the gatbage'},
    'task-2': { id: 'task-2', content: 'Whatch my favorite show'},
    'task-3': { id: 'task-3', content: 'Charge my phone'},
    'task-4': { id: 'task-4', content: 'Cook dinner'},
    'task-5': { id: 'task-5', content: 'fazer Bolo' },
    'task-6': { id: 'task-6', content: 'To com dor de cabeça' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'A fazeres',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'Feitos',
      taskIds: ['task-5']
    },
    'column-3': {
      id: 'column-3',
      title: 'Pendentes',
      taskIds: ['task-6']
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
};

export default InitialData;