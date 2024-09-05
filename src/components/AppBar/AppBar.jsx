import Navigation from '../Navigation/Navigation';
import UserMenu from '../../components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header aria-label="navigation" className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
