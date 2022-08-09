import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../hooks/index';
import { AppRoute } from '../../consts';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import MyListScreen from '../../pages/my-list/my-list';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { Film, Review } from '../../types';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';
import { isCheckedAuth } from '../../utils/utils';

type AppProps = {
  promoFilm: Film;
  reviewsList: Review[];
}

function App(props: AppProps): JSX.Element {
  const { authorizationStatus, isDataLoaded } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <Spinner/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              {...props}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyListScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <FilmScreen
              {...props}
            />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <AddReviewScreen />
          }
        />
        <Route
          path={AppRoute.Player}
          element={
            <PlayerScreen />
          }
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
