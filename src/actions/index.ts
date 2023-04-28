import * as UserActions from './usersActions';
import * as TodoActions from './todoActions';

const actionCreators = {
  ...UserActions,
  ...TodoActions,
};

export default actionCreators;
