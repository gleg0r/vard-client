import s from './style.module.scss';
import cn from 'classnames';

export default function Input({ placeholder, className, type }) {
  return (
    <input
      className={cn(s.input, className)}
      placeholder={placeholder}
      type={type}
    />
  );
}
