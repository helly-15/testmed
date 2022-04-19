import { InjuryMechanism, PatientInjuryKey } from 'documents';

export const keyDependecy = {
  [PatientInjuryKey.injuryMechanism]: [
    PatientInjuryKey.restrained,
    PatientInjuryKey.airbags
  ],
  [PatientInjuryKey.lossOfConsciousness]: [PatientInjuryKey.locDuration],
  [PatientInjuryKey.headMedicalImaging]: [
    PatientInjuryKey.mri,
    PatientInjuryKey.mriDate,
    PatientInjuryKey.ct,
    PatientInjuryKey.ctDate,
    PatientInjuryKey.xRay,
    PatientInjuryKey.xRayDate,
    PatientInjuryKey.otherHeadMedicalImaging,
    PatientInjuryKey.otherHeadMedicalImagingDate,
    PatientInjuryKey.skullFracture,
    PatientInjuryKey.brainBleed
  ],
  [PatientInjuryKey.mri]: [PatientInjuryKey.mriDate],
  [PatientInjuryKey.ct]: [PatientInjuryKey.ctDate],
  [PatientInjuryKey.xRay]: [PatientInjuryKey.xRayDate],
  [PatientInjuryKey.otherHeadMedicalImaging]: [
    PatientInjuryKey.otherHeadMedicalImagingDate
  ]
};

export const keyCondition = {
  [PatientInjuryKey.injuryMechanism]: (value: InjuryMechanism) =>
    value !== InjuryMechanism.MVA
};
