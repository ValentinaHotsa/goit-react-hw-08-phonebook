// import { NavLink } from 'react-router-dom';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { registerThunk } from '../redux/auth/authOperations';
const Register = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isLoggedIn, navigate]);
  const register = body => {
    dispatch(registerThunk(body));
  };

  return (
    <div>
      <h2>Registration</h2>
      <RegisterForm register={register} />
    </div>
  );
};

export default Register;
