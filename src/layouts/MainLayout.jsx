import s from './style.module.scss';
import { Outlet } from 'react-router-dom';

export default function LayoutMain() {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__container}>
        <h1>Layout</h1>
        <Outlet />
      </div>
    </div>
  );
}
