// import { 
//   TasksActions, 
//   LOAD_TASKS, 
//   LOAD_TASKS_COMPLETE,
//   LOAD_TASKS_FAILURE,
//   CREATE_TASK,
//   CREATE_TASK_COMPLETE,
//   CREATE_TASK_FAILURE,
//   DELETE_TASK,
//   DELETE_TASK_COMPLETE,
//   DELETE_TASK_FAILURE,
//   UPDATE_TASK,
//   UPDATE_TASK_COMPLETE,
//   UPDATE_TASK_FAILURE,
// } from '../actions/tasks.actions';
// import { Task } from '../models/tasks';
// import { 
//   createFeatureSelector, 
//   createSelector,
// } from '@ngrx/store';

// export interface State {
//   tasks: Task[];
//   isLoading: boolean;
//   error: string;
// }

// export const initialState: State = {
//   tasks: [],
//   isLoading: false,
//   error: '',
// };

// export const tasksReducer = (state = initialState, action: TasksActions): State  => {
//   switch (action.type) {
//     case LOAD_TASKS:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case LOAD_TASKS_COMPLETE:
//       return {
//         ...state,
//         isLoading: false,
//         tasks: action.payload,
//       };
//     case LOAD_TASKS_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload,
//       };
//     case CREATE_TASK:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case CREATE_TASK_COMPLETE:
//       return {
//         ...state,
//         isLoading: false,
//         tasks: [
//           ...state.tasks,
//           action.payload,
//         ]
//       };
//     case CREATE_TASK_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload,
//       };
//     case DELETE_TASK:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case DELETE_TASK_COMPLETE:
//       return {
//         ...state,
//         isLoading: false,
//         tasks: state.tasks.filter((task) => task.id !== action.payload)
//       };
//     case DELETE_TASK_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload,
//       };
//     case UPDATE_TASK:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case UPDATE_TASK_COMPLETE:
//       return {
//         ...state,
//         isLoading: false,
//         tasks: [
//           ...state.tasks.filter((task) => task.id !== action.payload.id),
//           action.payload,
//         ],
//       };
//     case UPDATE_TASK_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// export const selectTasksState= createFeatureSelector<State>(
//   'tasks',
// );

// export const getTasks = createSelector(selectTasksState,
//   (state: State) => state.tasks,
// );

// export const getNotPlannedAndDoneTasks = createSelector(selectTasksState,
//   (state: State) => state.tasks.filter((task) => !task.isPlanned && task.isDone),
// );

// export const getPlannedAndDoneTasks = createSelector(selectTasksState,
//   (state: State) => state.tasks.filter((task) => task.isPlanned && task.isDone),
// );

// export const getPlannedTasks = createSelector(selectTasksState,
//   (state: State) => state.tasks.filter((task) => task.isPlanned && !task.isDone),
// );

// export const getTasksLoading = createSelector(selectTasksState,
//   (state: State) => state.isLoading,
// );

// export const getTasksError = createSelector(selectTasksState,
//   (state: State) => state.error,
// );