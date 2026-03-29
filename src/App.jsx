import { useReducer, useRef, createContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Diary from './views/Diary';
import New from './views/New';
import Edit from './views/Edit';
import Notfound from './views/Notfound';

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
  if (!Array.isArray(parsedData) || parsedData.length === 0) return [];

  return parsedData;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, [], initData);

  const idRef = useRef(data.reduce((maxId, item) => Math.max(maxId, Number(item.id)), 0) + 1);

  useEffect(() => {
    localStorage.setItem('diary', JSON.stringify(data));
  }, [data]);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
