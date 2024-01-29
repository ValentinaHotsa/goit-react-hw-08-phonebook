import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
// import css from './RegisterForm.module.css';
import css from '../contactForm/ContactForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
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
            required
            minLength={3}
          />
        </label>
        <label className={css.formLabel}>
          Email
          <input className={css.formInput} type="email" name="email" required />
        </label>
        <label className={css.formLabel}>
          Password
          <input
            className={css.formInput}
            type="password"
            name="password"
            required
            minLength={7}
          />
        </label>
        <button className={css.formButton} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
