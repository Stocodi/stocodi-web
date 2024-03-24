import NotFoundContainer from '@components/NotFound/containers/NotFoundContainer';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const ROOT_NAVIGATION_PATHS = {} as const;

const RootNavigation = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFoundContainer />} />
    </Routes>
  );
};

export default RootNavigation;
