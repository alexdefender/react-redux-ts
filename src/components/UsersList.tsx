import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const UsersList: React.FC = (): JSX.Element => {
  const { list, loading, error } = useTypedSelector((state) => state.users);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {list.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

export default UsersList;
