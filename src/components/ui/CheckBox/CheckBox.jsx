import { useState } from 'react';
import s from './style.module.scss';
import cn from 'classnames';

export default function CheckBox() {
  const [isActive, setIsActive] = useState(false);

  const handleCheckBoxClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={cn(s.checkbox)}>
      <div
        className={cn(s.checkbox__item, isActive ? s.active : '')}
        onClick={handleCheckBoxClick}
      />
      <label onClick={handleCheckBoxClick} className={s.checkbox__text}>
        I agree with
        <span className={s.checkbox__accent}>Teams of service</span>
        and
        <span className={s.checkbox__accent}>Privacy policy</span>
      </label>
    </div>
  );
}
