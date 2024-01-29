import { UserMenu } from 'components/UserMenu/UserMenu';
import Header from 'components/Header/Header';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return <div>{isLoggedIn ? <UserMenu /> : <Header />}</div>;
};

export default AppBar;
