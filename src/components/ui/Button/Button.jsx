import s from './style.module.scss';
import cn from 'classnames';

export default function Button({ className, children, onClick }) {
  return (
    <button onClick={onClick} className={cn(s.button, className)}>
      {children}
    </button>
  );
}
