import s from './style.module.scss';
import logo from '../../assets/images/logo.svg';

export default function Header {
  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <img src={logo} alt='logo'/>
      </div>
    </header>
  )
}