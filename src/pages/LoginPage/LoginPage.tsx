import {FormEvent} from 'react';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import {Logo} from '../../components/Logo/Logo.tsx';
import {Helmet} from 'react-helmet-async';
import {SITE_NAME, AppRoute, CityName} from '../../const.ts';
import {useAppDispatch} from '../../hooks';
import {loginUser} from '../../store/actions.ts';
import {setCity} from '../../store/site-process/site-process.ts';
import type {TUserAuth} from '../../types/user.ts';


const INVALID_PASSWORD_MESSAGE = 'Password should contains at least one letter and digit and the password must not consist of spaces.';
const VALID_PASSWORD_REGEXP = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const loginData: TUserAuth = {
      email: String(data.email),
      password: String(data.password)
    };

    if (!loginData.password.match(VALID_PASSWORD_REGEXP)) {
      toast.warn(INVALID_PASSWORD_MESSAGE);
      return;
    }

    dispatch(loginUser(loginData));
  };

  const handleLocationClick = () => dispatch(setCity(CityName.Amsterdam));

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>{SITE_NAME}: authorization</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" onClick={handleLocationClick} to={AppRoute.Root}>
                <span>{CityName.Amsterdam}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};


export {LoginPage};
