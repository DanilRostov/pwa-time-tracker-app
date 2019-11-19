import { 
  DayActions, 
  LOAD_DAYS, 
  LOAD_DAYS_COMPLETE, 
  LOAD_DAYS_FAILURE,
  UPDATE_DAY,
  UPDATE_DAY_COMPLETE,
  UPDATE_DAY_FAILURE,
} from '../actions/day.actions';
import { 
  createFeatureSelector, 
  createSelector,
} from '@ngrx/store';
import { Day } from '../models/day';
import { CREATE_TASK, TasksActions, CREATE_TASK_COMPLETE, CREATE_TASK_FAILURE, UPDATE_TASK, UPDATE_TASK_COMPLETE, UPDATE_TASK_FAILURE, DELETE_TASK, DELETE_TASK_COMPLETE, DELETE_TASK_FAILURE } from '../actions/tasks.actions';
import { Task } from '../models/tasks';

export interface State {
  days: Day[],
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  days: [],
  isLoading: false,
  error: '',
};

export const daysReducer = (state = initialState, action: DayActions | TasksActions): State  => {
  switch (action.type) {
    case LOAD_DAYS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_DAYS_COMPLETE:
      return {
        ...state,
        isLoading: false,
        days: action.payload,
      };
    case LOAD_DAYS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UPDATE_DAY:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_DAY_COMPLETE:
      return {
        ...state,
        isLoading: false,
        days: [
          ...state.days.filter((day: Day) => day.id !== action.payload.id),
          action.payload,
        ],
      };
    case UPDATE_DAY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CREATE_TASK:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_TASK_COMPLETE:
      return {
        ...state,
        isLoading: false,
        days: getUpdatedDaysOnCreateTask(state, action.payload),
      };
    case CREATE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UPDATE_TASK:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_TASK_COMPLETE:
      return {
        ...state,
        isLoading: false,
        days: getUpdatedDaysOnUpdateTask(state, action.payload),
      };
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_TASK_COMPLETE:
      return {
        ...state,
        isLoading: false,
        days: getUpdatedDaysOnDeleteTask(state, action.payload),
      };
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

const getUpdatedDaysOnCreateTask = (state, payload) => {
  const dayToUpdate = state.days.find((day: Day) => day.id === payload.dayId);
  const dayIndex = state.days.findIndex((day: Day) => day.id == payload.dayId);
  const updatedDay = {
    ...dayToUpdate,
    tasks: [ ...dayToUpdate.tasks, ...[payload] ],
  };
  const updatedDaysState = [ ...state.days ];
  updatedDaysState[dayIndex] = updatedDay;
  return updatedDaysState;
}

const getUpdatedDaysOnUpdateTask = (state, payload) => {
  const dayToUpdate = state.days.find((day: Day) => day.id === payload.dayId);
  const dayIndex = state.days.findIndex((day: Day) => day.id == payload.dayId);
  const updatedDay = {
    ...dayToUpdate,
    tasks: [ 
      ...dayToUpdate.tasks.filter((task: Task) => task.id !== payload.id),
      ...[payload],
    ],
  };
  const updatedDaysState = [ ...state.days ];
  updatedDaysState[dayIndex] = updatedDay;
  return updatedDaysState;
}

const getUpdatedDaysOnDeleteTask = (state, payload) => {
  const dayToUpdate = state.days.find((day: Day) => day.id === payload.dayId);
  const dayIndex = state.days.findIndex((day: Day) => day.id == payload.dayId);
  const updatedDay = {
    ...dayToUpdate,
    tasks: [ ...dayToUpdate.tasks.filter((task: Task) => task.id !== payload.id) ],
  };
  const updatedDaysState = [ ...state.days ];
  updatedDaysState[dayIndex] = updatedDay;
  return updatedDaysState;
}

export const selectDaysState= createFeatureSelector<State>('days');

export const selectDays = createSelector(selectDaysState,
  (state: State) => state.days,
);

export const selectDaysLoading = createSelector(selectDaysState,
  (state: State) => state.isLoading,
);

export const selectDaysError = createSelector(selectDaysState,
  (state: State) => state.error,
);