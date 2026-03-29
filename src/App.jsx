import { createContext } from 'react';
import useDiaryData from './hooks/useDiaryData';

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App({ children }) {
  const { data, onCreate, onUpdate, onDelete } = useDiaryData();

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        {children}
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
