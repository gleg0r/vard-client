/* eslint-disable indent */
import { useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import Input from '../../components/ui/Input/Input';
import CheckBox from '../../components/ui/CheckBox/CheckBox';
import Button from '../../components/ui/Button/Button';
import logo from '../../assets/images/logo.svg';
import google from '../../assets/images/google_auth.svg';
import github from '../../assets/images/github_auth.svg';

export default function AuthPage() {
  const [isLoginPage, setIsLoginPage] = useState(false);

  const changeToLogin = () => setIsLoginPage(true);

  return (
    <div className={s.auth}>
      <div className={s.auth__header}>
        <h3 className={s.auth__title}>
          {isLoginPage ? 'Log in' : 'Welcome'} to VARD
        </h3>
        <img src={logo} alt="logo" />
      </div>
      <div className={s.auth__main}>
        <div className={s.auth__form}>
          {isLoginPage ? '' : <Input placeholder={'Name'} type={'name'} />}
          <Input placeholder={'Email'} type={'email'} />
          <div className={s.auth__password}>
            <Input placeholder={'Password'} type={'password'} />
          </div>
          {isLoginPage ? (
            ''
          ) : (
            <Input placeholder={'Confirm password'} type={'password'} />
          )}
        </div>
        {isLoginPage ? '' : <CheckBox />}
      </div>
      <div className={s.auth__footer}>
        <div className={s.auth__btns}>
          {isLoginPage ? (
            ''
          ) : (
            <Button className={s.auth__create}>Create account</Button>
          )}

          {isLoginPage ? '' : <p className={s.auth__text}>or</p>}

          <Button
            onClick={() => changeToLogin()}
            className={cn(isLoginPage ? s.auth__login_active : s.auth__login)}
          >
            Log in
          </Button>
        </div>
        {isLoginPage ? (
          ''
        ) : (
          <div className={s.auth__socials}>
            <p className={s.auth__signup}>or Sign Up with</p>
            <div className={s.auth__socials_btns}>
              <Button className={s.auth__social}>
                <img src={google} alt="google auth" />
              </Button>
              <Button className={s.auth__social}>
                <img src={github} alt="google auth" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
