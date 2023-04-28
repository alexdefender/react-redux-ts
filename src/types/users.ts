export interface UsersState {
  list: any[];
  loading: boolean;
  error: null | string;
}

export enum UsersActionTypes {
  FETCH_USERS_START = 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersStart {
  type: UsersActionTypes.FETCH_USERS_START;
}

interface FetchUsersSuccess {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUsersError {
  type: UsersActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UsersAction = FetchUsersStart | FetchUsersSuccess | FetchUsersError;
