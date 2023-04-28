export type TodoState = {
  list: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
};

export enum TodoActionTypes {
  FETCH_TODO_START = 'FETCH_TODO_START',
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
  FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
  SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface FetchTodoStart {
  type: TodoActionTypes.FETCH_TODO_START;
}

interface FetchTodoSuccess {
  type: TodoActionTypes.FETCH_TODO_SUCCESS;
  payload: any[];
}

interface FetchTodoError {
  type: TodoActionTypes.FETCH_TODO_ERROR;
  payload: string;
}

interface SetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction = FetchTodoStart | FetchTodoSuccess | FetchTodoError | SetTodoPage;
