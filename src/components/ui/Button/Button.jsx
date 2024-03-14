import s from './style.module.scss';
import cn from 'classnames';

export default function Button({ className, children }) {
  return <button className={cn(s.button, className)}>{children}</button>;
}
