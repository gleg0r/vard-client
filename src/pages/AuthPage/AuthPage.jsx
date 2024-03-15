import s from './style.module.scss';
import Input from '../../components/ui/Input/Input';
import CheckBox from '../../components/ui/CheckBox/CheckBox';
import Button from '../../components/ui/Button/Button';
import logo from '../../assets/images/logo.svg';
import google from '../../assets/images/google_auth.svg';
import github from '../../assets/images/github_auth.svg';

export default function AuthPage() {
  return (
    <div className={s.auth}>
      <div className={s.auth__header}>
        <h3 className={s.auth__title}>Welcome to VARD</h3>
        <img src={logo} alt="logo" />
      </div>
      <div className={s.auth__main}>
        <div className={s.auth__form}>
          <Input placeholder={'Name'} type={'name'} />
          <Input placeholder={'Email'} type={'email'} />
          <Input placeholder={'Password'} type={'password'} />
          <Input placeholder={'Confirm password'} type={'password'} />
        </div>
        <CheckBox />
      </div>
      <div className={s.auth__footer}>
        <div className={s.auth__btns}>
          <Button className={s.auth__create}>Create account</Button>
          <p className={s.auth__text}>or</p>
          <Button className={s.auth__login}>Log in</Button>
        </div>
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
      </div>
    </div>
  );
}
