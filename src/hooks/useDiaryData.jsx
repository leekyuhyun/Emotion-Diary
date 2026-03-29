import { useReducer, useRef, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

function initData() {
  const storedData = localStorage.getItem('diary');
  if (!storedData) return [];
  const parsedData = JSON.parse(storedData);
  return Array.isArray(parsedData) ? parsedData : [];
}

const useDiaryData = () => {
  const [data, dispatch] = useReducer(reducer, [], initData);
  const idRef = useRef(data.reduce((maxId, item) => Math.max(maxId, Number(item.id)), 0) + 1);

  useEffect(() => {
    localStorage.setItem('diary', JSON.stringify(data));
  }, [data]);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: { id: idRef.current++, createdDate, emotionId, content },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: { id, createdDate, emotionId, content },
    });
  };

  const onDelete = (id) => {
    dispatch({ type: 'DELETE', id });
  };

  return { data, onCreate, onUpdate, onDelete };
};

export default useDiaryData;
