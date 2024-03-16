
import React, { useState } from 'react';
import s from './style.module.scss';
import cn from 'classnames';

export default function CheckBox() {
  const [isActive, setIsActive] = useState(false);

  const handleCheckBoxClick = () => { 
    setIsActive(prev => !prev); 
  };
  

  return (
    <div className={cn('checkbox__Container', { [s.checkbox__Container]: true })}>
      <div
        className={cn('checkbox__Container__modifier', { [s.checkbox__Container__modifier]: true, [s.active]: isActive })}
        onClick={handleCheckBoxClick}
      />
     <label className={s.checkbox__Container__block}>
  I agree with{' '}
  <span className={s.checkbox__Container__element}> Teams of service </span> and {' '}
  <span className={s.checkbox__Container__element}> Privacy policy</span>
</label>
    </div>
  );
}
