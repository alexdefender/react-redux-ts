import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { todoReducer } from './todoReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
