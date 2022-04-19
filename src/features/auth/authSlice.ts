import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { Routes } from 'routes';

import {
  addClinicianRole,
  addPatientRole,
  db,
  getDataConverter
} from 'api/firebase';

import { AppThunk } from 'app/store';
import {
  Collection,
  OnboardingStep,
  PatientOnboarding,
  PatientSubcollection
} from 'documents';

export enum Role {
  Patient = 'Patient',
  Clinician = 'Clinician'
}

export interface User {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  uid: string;
  role: Role;
}

export interface AuthState {
  isLoading: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  isLoading: true,
  user: null,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },

    signOut(state) {
      state.isLoading = false;
      state.user = null;
      state.error = null;
    },

    startLoading(state) {
      state.isLoading = true;
    },

    stopLoading(state) {
      state.isLoading = false;
    }
  }
});

export const { signIn } = authSlice.actions;

export default authSlice.reducer;

export const signOut = (
  auth: firebase.auth.Auth
): AppThunk => async dispatch => {
  await auth.signOut();
  dispatch(authSlice.actions.signOut());
  dispatch(push('/'));
};

async function checkPendingOnboarding(user: User) {
  if (user.role === Role.Clinician) {
    return false;
  }
  const onboardingsPath = `${Collection.Patients}/${user.uid}/${PatientSubcollection.Onboardings}`;
  const onboardings = await db
    .collection(onboardingsPath)
    .withConverter(getDataConverter<PatientOnboarding>())
    .get();
  return (
    onboardings.docs[0]?.data().lastCompletedStep !== OnboardingStep.Profile
  );
}

export const restoreAuth = (auth: firebase.auth.Auth): AppThunk => async (
  dispatch,
  getState
) => {
  const onIdTokenChanged = async (firebaseUser: firebase.User | null) => {
    if (firebaseUser !== null) {
      const token = await firebaseUser.getIdTokenResult();

      if (!token.claims.role) return;

      const user: User = {
        displayName: firebaseUser.displayName,
        email: firebaseUser.email,
        phoneNumber: firebaseUser.phoneNumber,
        uid: firebaseUser.uid,
        role: token.claims.role
      };

      dispatch(signIn(user));

      if (await checkPendingOnboarding(user)) {
        dispatch(push(Routes.PatientOnboardingProfile));
      } else if (getState().router.location.pathname.indexOf('sign-in') > -1) {
        dispatch(push('/'));
      }
    } else {
      dispatch(authSlice.actions.stopLoading());
    }
  };

  auth.onIdTokenChanged(onIdTokenChanged);
  auth.onAuthStateChanged(user => {
    if (!user) {
      dispatch(authSlice.actions.stopLoading());
    }
  });
};

export const signUpClinician = (
  auth: firebase.auth.Auth
): AppThunk => async dispatch => {
  dispatch(authSlice.actions.startLoading());
  await addClinicianRole();
  await auth.currentUser?.getIdToken(true);

  dispatch(push(Routes.ClinicianPatientList));
};

export const signUpPatient = (
  auth: firebase.auth.Auth
): AppThunk => async dispatch => {
  dispatch(authSlice.actions.startLoading());
  // I'm not sure about this change, tough now it looks like it changes path without wierd pause on sign-up
  dispatch(push(Routes.PatientOnboardingProfile));
  await addPatientRole();
  await auth.currentUser?.getIdToken(true);
};
