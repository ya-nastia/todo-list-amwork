import { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { useStore } from './store';

function App() {
  const store = useStore();

  useEffect(() => {
    store.getTodos();
  }, [store]);

  return (
    <div className='container'>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;