import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? css.active : css.link)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? css.active : css.link)}
      >
        Log In
      </NavLink>
    </nav>
  );
};
