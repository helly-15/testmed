import './FirebaseSignIn.scss';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useDispatch } from 'react-redux';

import fb from 'firebase/app';

import { auth } from 'api/firebase';

import { Role, signUpClinician, signUpPatient } from 'features/auth/authSlice';

export interface FirebaseSignInProps {
  signInRole: Role;
}

// TODO: Try to find more elegant way
// This require because FirebaseUI initialize only once and keep only first value or role
let signInRole: Role;

export function FirebaseSignIn(props: FirebaseSignInProps) {
  const dispatch = useDispatch();

  signInRole = props.signInRole;

  const signInSuccessWithAuthResult = (authResult: fb.auth.UserCredential) => {
    if (authResult.user && authResult?.additionalUserInfo?.isNewUser) {
      dispatch(
        signInRole === Role.Patient
          ? signUpPatient(auth)
          : signUpClinician(auth)
      );
    }

    return false;
  };

  const uiConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [fb.auth.EmailAuthProvider.PROVIDER_ID],
    credentialHelper: 'none',
    callbacks: { signInSuccessWithAuthResult }
  };

  return (
    <div className="firebase-sign-in">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}
