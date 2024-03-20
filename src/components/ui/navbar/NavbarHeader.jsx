import React from 'react';
import cn from 'classnames'; 
import s from './style.module.scss';

const NavbarHeader = ({ isRotated, handleClick }) => {
  return (
    <div className={cn(s.nav)}>
      <div className={s.nav__btn}>
        <a href="#">
          <i className={cn('icon-faq', s.nav__faq)} />
        </a>
        <a href="#">
          <i className={cn('icon-settings', s.nav__settings)} />
        </a>
      </div>
      <button className={s.nav__user} onClick={handleClick}>
        <i className={cn('icon-user', s.nav__name)} />
        <span>User Name</span>
        <i className={`icon-arrow_filled1 ${isRotated ? s.rotated : ''}`} />
      </button>
    </div>
  );
};

export default NavbarHeader;
