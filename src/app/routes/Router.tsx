import { Suspense, lazy } from 'react';

import { Route, Routes } from 'react-router';

import MainLayout from '@app/layout/mainLayout/MainLayout';
import LoadingPage from '@pages/loadingPage/LoadingPage';

const Home = lazy(() => import('@pages/home'));
const NotFound = lazy(() => import('@pages/notFound/NotFound'));

const Router = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
