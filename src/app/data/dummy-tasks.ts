import { Task } from "../types/task";

export const DUMMY_TASKS: Task[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Practice Angular',
    summary:
      'Practice all the basic and advanced features of Angular.',
    dueDate: '2025-04-05',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-03-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]
