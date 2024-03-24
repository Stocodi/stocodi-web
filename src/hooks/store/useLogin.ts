import { LoginStateType, logined } from '@store/login/slice';
import { RootStoreStateType } from '@store/store';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function useLogin() {
  const loginState = useSelector((root: RootStoreStateType) => root.login);

  const dispatch = useDispatch();

  const __logined = useCallback(
    (payload: LoginStateType) => {
      dispatch(logined(payload));
    },
    [dispatch],
  );

  return {
    loginState,
    __logined,
  };
}
