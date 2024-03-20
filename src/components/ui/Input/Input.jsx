import s from './style.module.scss';
import cn from 'classnames';

export default function Input({ placeholder, className, type, onChange }) {
  return (
    <input
      onChange={onChange}
      className={cn(s.input, className)}
      placeholder={placeholder}
      type={type}
    />
  );
}
