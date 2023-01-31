/** @format */
import Login from '../signupLogin/Login';
import SignUp from '../signupLogin/SignUp';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from '../Dashboard';
import SplashPage from '../SplashPage';
import Explore from '../Explore';
import Footer from '../Footer';
import Chat from '../Chat';
import DevsAbout from '../About/DevsAbout';
import ProdPathAbout from '../About/ProdPathAbout';
import Task from '../Task';
const Main = () => {
  const { isLoggedIn, user } = useSelector((state) => state.login);
  console.log(user);
  return (
    <>
      <Routes>
        <Route
          path={'/'}
          element={isLoggedIn ? <Dashboard /> : <SplashPage />}
        />
        <Route
          path={'/explore'}
          element={<Explore />}
        />

        <Route
          path={'/tasks'}
          element={<Task />}
        />
        <Route
          path={'/login'}
          element={<Login />}
        />
        <Route
          path={'/signup'}
          element={<SignUp />}
        />
        <Route
          path={'/devs'}
          element={<DevsAbout />}
        />
        <Route
          path={'/about'}
          element={<ProdPathAbout />}
        />
      </Routes>
      {isLoggedIn ? <Chat /> : null}
      <Footer />
    </>
  );
};
export default Main;
