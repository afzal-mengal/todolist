import { Provider } from 'react-redux';
import store from './store/store.js';
import './App.css';
import ToDoCard from './components/ToDoCard';

function App() {
  return (
    <Provider store={store}>
      <ToDoCard></ToDoCard>
    </Provider>
  );
}

export default App;
