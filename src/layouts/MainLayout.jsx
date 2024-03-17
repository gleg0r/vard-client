import s from './style.module.scss';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

export default function LayoutMain() {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper__container}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
