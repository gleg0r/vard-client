import { useState } from 'react';
import s from './style.module.scss';
import logo from '../../assets/images/logo.svg';
import questionSvg from './svg/question.svg';
import searchSvg from './svg/search.svg';
import usingSvg from './svg/user.svg';
import arrowSvg from './svg/arrow.svg';
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
      <div className={cn(s.header__menu)}>
        <div className={s.header__btn}>
          <a href="#">
            <img src={questionSvg} alt="question" />
          </a>
          <a href="#">
            <img src={searchSvg} alt="search" />
          </a>
        </div>
        <button className={s.header__user} onClick={handleClick}> 
        <img src={usingSvg} alt='using' />  
        <span>User Name</span>  
        <img className={isRotated ? s.rotated : ''} src={arrowSvg} alt='arrow'/> 
        </button>

      </div>
    </header>
  );
};

export default Header;
