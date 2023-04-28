import { Dispatch } from 'redux';
import { UsersActionTypes, UsersAction } from '../types/users';
import api from '../services/request';
import { USERS_URL } from '../constants/api';

const fetchUsersStart = (): UsersAction => ({ type: UsersActionTypes.FETCH_USERS_START });

const fetchUsersSuccess = (payload: any[]): UsersAction => ({ type: UsersActionTypes.FETCH_USERS_SUCCESS, payload });

const fetchUsersError = (error: string): UsersAction => ({ type: UsersActionTypes.FETCH_USERS_ERROR, payload: error });

export const fetchUsers = () => async (dispatch: Dispatch<UsersAction>) => {
  dispatch(fetchUsersStart());

  return api
    .get(USERS_URL)
    .then((res) => {
      dispatch(fetchUsersSuccess(res.data));
    })
    .catch((e) => {
      dispatch(fetchUsersError('Error users'));
    });
};

// export const fetchUsers = () => async (dispatch: Dispatch<UsersAction>) => {
//   try {
//     dispatch({ type: UsersActionTypes.FETCH_USERS_START });
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//     dispatch({ type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: UsersActionTypes.FETCH_USERS_ERROR, payload: 'Error' });
//   }
// };
