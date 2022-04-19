import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { replace } from 'connected-react-router';

import { RootState } from 'app/rootReducer';
import { FirebaseSignIn } from 'components/FirebaseSignIn';
import { Role } from 'features/auth/authSlice';

export interface SignInProps {
  signInRole: Role;
}

const SignIn: React.FC<SignInProps> = (props: SignInProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  React.useEffect(() => {
    if (!user) return;
    dispatch(replace('/'));
  });

  return <FirebaseSignIn {...props} />;
};

export default SignIn;
