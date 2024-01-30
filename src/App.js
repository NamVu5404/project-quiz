import { useDispatch } from 'react-redux';
import './App.css';
import AllRoutes from './components/AllRoutes';
import { getCookie } from './utils/request';
import { isLogin } from './actions';

function App() {
  const dispatch = useDispatch();
  const token = getCookie("token");

  if (token) {
    dispatch(isLogin(true));
  } else {
    dispatch(isLogin(false));
  }

  return (
    <AllRoutes />
  );
}

export default App;
