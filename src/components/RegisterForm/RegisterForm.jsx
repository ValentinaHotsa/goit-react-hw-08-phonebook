import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/authOperations';
// import css from './RegisterForm.module.css';
import css from '../contactForm/ContactForm.module.css';
import { Link } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      registerThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.containerForm}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.formLabel}>
          Username
          <input
            className={css.formInput}
            type="text"
            name="name"
            minLength={3}
            id="inputName"
            placeholder="name"
          />
        </label>
        <label className={css.formLabel}>
          Email
          <input
            className={css.formInput}
            type="email"
            name="email"
            id="inputEmail"
            placeholder="email"
          />
        </label>
        <label className={css.formLabel}>
          Password
          <input
            className={css.formInput}
            type="password"
            name="password"
            minLength={7}
            id="inputPassword"
            placeholder="password"
          />
        </label>
        <button className={css.formButton} type="submit">
          Register
        </button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};
