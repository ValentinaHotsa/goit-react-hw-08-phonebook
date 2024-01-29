import { LoginForm } from '../components/LoginForm/LoginForm';
// import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';
export default function Login() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    isLoggedIn && navigate('/contacts');
  }, [isLoggedIn, navigate]);
  // const login = body => {
  //   dispatch(logInThunk(body));
  // };
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}
