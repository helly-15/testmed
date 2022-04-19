import { Occupation, PatientProfileKey } from 'documents';

export const keyDependency = {
  [PatientProfileKey.occupation]: [
    PatientProfileKey.occupationType,
    PatientProfileKey.studentLevel,
    PatientProfileKey.occupationProf
  ]
};

export const keyCondition = {
  [PatientProfileKey.occupation]: (value: Occupation) =>
    value === Occupation.Student || value === Occupation.Working
};
