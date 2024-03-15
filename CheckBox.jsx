import React, { useState } from 'react'; 
import s from './style.module.scss'; 
 
export default function CheckBox() { 
  const [isActive, setIsActive] = useState(false); 
 
  const handleCheckBoxClick = () => { 
    setIsActive(!isActive); 
  }; 
 
  return ( 
    <div className={`${s.checkbox} ${s.checkboxContainer}`}> 
      { } 
      <div 
        className={`${s.checkboxSquare} ${isActive ? s.active : ''}`} 
        onClick={handleCheckBoxClick} 
      /> 
      <label className={s.checkboxLabel}> 
        I agree with <span className={s.checkboxSpan}>Teams of service</span> and{' '} 
        <span className={s.checkboxSpan}>Privacy policy</span> 
      </label> 
    </div> 
  ); 
} 