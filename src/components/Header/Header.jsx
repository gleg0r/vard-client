import { useState } from 'react';
import s from './style.module.scss';
import logo from '../../assets/images/logo.svg';
import NavbarHeader from '../ui/navbar/NavbarHeader';
import cn from 'classnames';

const Header = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated((prev) => !prev);
  };

  return (
    <header className={cn(s.header)}>
      <div className={s.header__logo}>
        <img src={logo} alt="logo" />
      </div>
        <div>
      <NavbarHeader isRotated={isRotated} handleClick={handleClick} />
    </div>
    </header>
  );
};

export default Header;
