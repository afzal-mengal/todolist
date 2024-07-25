import { Provider } from 'react-redux';
import store from './store/store.js';
import ToDoCard from './components/ToDoCard';

import './App.css';
import DoneCard from './components/DoneCard.js';

function App() {
  return (
    <Provider store={store}>
      <div className='parent'>
        <ToDoCard></ToDoCard>
        <DoneCard></DoneCard>
      </div>
    </Provider>
  );
}

export default App;
