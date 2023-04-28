import { Dispatch } from 'redux';
import { TodoActionTypes, TodoAction } from '../types/todo';
import api from '../services/request';
import { TODOS_URL } from '../constants/api';

const fetchTodosStart = (): TodoAction => ({ type: TodoActionTypes.FETCH_TODO_START });

const fetchTodosSuccess = (payload: any[]): TodoAction => ({ type: TodoActionTypes.FETCH_TODO_SUCCESS, payload });

const fetchTodosError = (error: string): TodoAction => ({ type: TodoActionTypes.FETCH_TODO_ERROR, payload: error });

export const fetchTodos =
  (page = 1, limit = 10) =>
  async (dispatch: Dispatch<TodoAction>) => {
    dispatch(fetchTodosStart());

    const params = { _page: page, _limit: limit };

    return api
      .get(TODOS_URL, { params })
      .then((res) => {
        dispatch(fetchTodosSuccess(res.data));
      })
      .catch((e) => {
        dispatch(fetchTodosError('Error todos'));
      });
  };

export const setTodoPage = (page: number): TodoAction => ({
  type: TodoActionTypes.SET_TODO_PAGE,
  payload: page,
});
