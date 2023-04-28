import { UsersState, UsersAction, UsersActionTypes } from '../types/users';

const initialState: UsersState = {
  list: [],
  loading: false,
  error: null,
};

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS_START:
      return { loading: true, error: null, list: [] };

    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, list: action.payload };

    case UsersActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, list: [] };

    default:
      return state;
  }
};
