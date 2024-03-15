import React, { useState } from 'react';
import s from './style.module.scss';
import cn from 'classnames';

export default function CheckBox() {
  const [isActive, setIsActive] = useState(false);

  const handleCheckBoxClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={cn('checkbox__Container', { [s.checkbox__Container]: true })}>
      <div
        className={cn('element__modifier', { [s.element__modifier]: true, [s.active]: isActive })}
        onClick={handleCheckBoxClick}
      />
     <label className={cn('block__element', { [s.block__element]: true })}>
  I agree with{' '}
  <span className={cn('checkbox__element', { [s.checkbox__element]: true })}> Teams of service </span> and {' '}
  <span className={cn('checkbox__element', { [s.checkbox__element]: true })}> Privacy policy</span>
</label>
    </div>
  );
}
