import { ROOT_NAVIGATION_PATHS } from '@routes/RootNavigation';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useRootNavigate() {
  const navigate = useNavigate();

  const __navigateRootPage = useCallback(
    (
      page: (typeof ROOT_NAVIGATION_PATHS)[keyof typeof ROOT_NAVIGATION_PATHS],
    ) => {
      navigate(page);
    },
    [navigate],
  );

  return {
    __navigateRootPage,
  };
}
