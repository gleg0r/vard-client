import s from './style.module.scss';
import Input from '../../components/ui/Input/Input';
import logo from '../../assets/images/logo.svg';
import CheckBox from '../../components/ui/CheckBox/CheckBox';

export default function AuthPage() {
  return (
    <div className={s.auth}>
      <div className={s.auth__header}>
        <h3 className={s.auth__title}>Welcome to VARD</h3>
        <img src={logo} alt="logo" />
      </div>
      <Input placeholder={'Name'} type={'name'} />
      <Input placeholder={'Email'} type={'email'} />
      <Input placeholder={'Password'} type={'password'} />
      <Input placeholder={'Confirm password'} type={'password'} />
      <Input placeholder={'Name'} />
      <Input placeholder={'Email'} />
      <Input placeholder={'Password'} />
      <Input placeholder={'Confirm password'} />
      <CheckBox />
    </div>
  );
}