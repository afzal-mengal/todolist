import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './store/store.js';
import ToDoPage from './pages/ToDoPage.js';
import Login from './pages/Login.js';

import './App.css';
import Signup from './pages/Signup.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDoPage></ToDoPage>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
