import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const pages = [1, 2, 3, 4, 5];

const TodoList: React.FC = (): JSX.Element => {
  const { list, loading, error, page, limit } = useTypedSelector((state) => state.todo);
  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {list.map(({ id, title }) => (
        <div key={id}>
          {id} - {title}
        </div>
      ))}

      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            style={{ padding: 8, border: `1px solid ${p === page ? 'red' : 'grey'}`, cursor: 'pointer' }}
            key={p}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
