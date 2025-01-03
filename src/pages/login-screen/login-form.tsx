import { FormEvent, memo, useCallback, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { authLogin } from '../../store/api-actions';
import { Auth } from '../../types/auth.type';

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [authInfo, setAuthInfo] = useState<Auth>({ email: '', password: '' });
  const handleChangeAuthInfo = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setAuthInfo((auth) => ({
        ...auth,
        [event.target.name]: event.target.value,
      })),
    []
  );

  const submit = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      if (authInfo.email.length > 0 && authInfo.password.length > 0) {
        dispatch(
          authLogin({
            email: authInfo.email,
            password: authInfo.password,
          })
        );
      }
    },
    [authInfo.email, authInfo.password, dispatch]
  );

  return (
    <form onSubmit={submit} className="login__form form">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          value={authInfo.email}
          onChange={handleChangeAuthInfo}
          placeholder="Email"
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          value={authInfo.password}
          onChange={handleChangeAuthInfo}
          name="password"
          placeholder="Password"
          required
        />
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export const MemoizedLoginForm = memo(LoginForm);
