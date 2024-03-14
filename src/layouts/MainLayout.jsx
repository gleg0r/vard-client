import s from './style.module.scss';
import { Outlet } from 'react-router-dom';

export default function LayoutMain() {
  return (
    <div className={s.wrapper}>
      <Outlet />
    </div>
  );
}
