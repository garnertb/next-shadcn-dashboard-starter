import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { persist } from 'zustand/middleware';
import { UniqueIdentifier } from '@dnd-kit/core';
import { Column } from '../components/board-column';

export type Status = string;

const defaultCols = [
  {
    id: 'TODO' as const,
    title: 'Todo',
    color: '#2563eb' // Blue
  },
  {
    id: 'IN_PROGRESS' as const,
    title: 'In Progress',
    color: '#ca8a04' // Amber
  },
  {
    id: 'DONE' as const,
    title: 'Done',
    color: '#16a34a' // Green
  }
] satisfies Column[];

export type ColumnId = (typeof defaultCols)[number]['id'];

export type Task = {
  id: string;
  title: string;
  description?: string;
  status: Status;
};

export type State = {
  tasks: Task[];
  columns: Column[];
  draggedTask: string | null;
};

const initialTasks: Task[] = [
  {
    id: 'task1',
    status: 'TODO',
    title: 'Project initiation and planning'
  },
  {
    id: 'task2',
    status: 'TODO',
    title: 'Gather requirements from stakeholders'
  },
  {
    id: 'task3',
    status: 'IN_PROGRESS',
    title: 'Design system architecture'
  },
  {
    id: 'task4',
    status: 'DONE',
    title: 'Set up development environment'
  }
];

export type Actions = {
  addTask: (title: string, description?: string) => void;
  addCol: (title: string, color?: string) => void;
  dragTask: (id: string | null) => void;
  removeTask: (title: string) => void;
  removeCol: (id: UniqueIdentifier) => void;
  setTasks: (updatedTask: Task[]) => void;
  setCols: (cols: Column[]) => void;
  updateCol: (id: UniqueIdentifier, newName: string, color?: string) => void;
};

export const useTaskStore = create<State & Actions>()(
  persist(
    (set) => ({
      tasks: initialTasks,
      columns: defaultCols,
      draggedTask: null,
      addTask: (title: string, description?: string) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { id: uuid(), title, description, status: 'TODO' }
          ]
        })),
      updateCol: (id: UniqueIdentifier, newName: string, color?: string) =>
        set((state) => ({
          columns: state.columns.map((col) =>
            col.id === id ? { 
              ...col, 
              title: newName,
              ...(color && { color })
            } : col
          )
        })),
      addCol: (title: string, color?: string) =>
        set((state) => ({
          columns: [
            ...state.columns,
            { 
              title, 
              id: state.columns.length ? title.toUpperCase() : 'TODO',
              color: color || '#64748b' // Default slate color if none provided
            }
          ]
        })),
      dragTask: (id: string | null) => set({ draggedTask: id }),
      removeTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id)
        })),
      removeCol: (id: UniqueIdentifier) =>
        set((state) => ({
          columns: state.columns.filter((col) => col.id !== id)
        })),
      setTasks: (newTasks: Task[]) => set({ tasks: newTasks }),
      setCols: (newCols: Column[]) => set({ columns: newCols })
    }),
    { name: 'task-store', skipHydration: true }
  )
);