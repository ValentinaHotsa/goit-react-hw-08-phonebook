import { LoginForm } from '../components/LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
      <p>
        Don't have an account? <NavLink to="/register">Sign up</NavLink>
      </p>
    </div>
  );
}
