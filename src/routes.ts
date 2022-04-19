import { replace, toPairs } from 'lodash';

enum Routes {
  ClinicianSignIn = '/clinician/sign-in',
  ClinicianHome = '/clinician/patients',
  ClinicianPatientList = '/clinician/patients',
  ClinicianAssessment = '/clinician/patient/:patientId/assessment',
  ClinicianPatientChart = '/clinician/patient/:patientId/chart',
  ClinicianPatientDashboard = '/clinician/patient/:patientId/dashboard',
  ClinicianPatientEducationalArticles = '/clinician/patient/:patientId/educational-articles',
  ClinicianPatientExercisesLibrary = '/clinician/patient/:patientId/exercises-library',
  ClinicianPatientGoalsLibrary = '/clinician/patient/:patientId/goals-library',
  ClinicianPatientIntake = '/clinician/patient/:patientId/intake',
  ClinicianPatientIntakeFamilyHistory = '/clinician/patient/:patientId/intake/family-history',
  ClinicianPatientIntakeHealthHistory = '/clinician/patient/:patientId/intake/health-history',
  ClinicianPatientIntakeHealthHistoryAllergies = '/clinician/patient/:patientId/intake/health-history/allergies',
  ClinicianPatientIntakeHealthHistoryEnvironment = '/clinician/patient/:patientId/intake/health-history/environment',
  ClinicianPatientIntakeHealthHistoryImmunization = '/clinician/patient/:patientId/intake/health-history/immunization',
  ClinicianPatientIntakeHealthHistoryLifestyle = '/clinician/patient/:patientId/intake/health-history/lifestyle',
  ClinicianPatientIntakeHealthHistoryMedications = '/clinician/patient/:patientId/intake/health-history/medications',
  ClinicianPatientIntakeHealthHistoryReproductiveHealth = '/clinician/patient/:patientId/intake/health-history/reproductive-health',
  ClinicianPatientIntakeHealthHistoryStressAndSleep = '/clinician/patient/:patientId/intake/health-history/stress-and-sleep',
  ClinicianPatientIntakeMemo = '/clinician/patient/:patientId/intake/memo',
  ClinicianPatientIntakeProfile = '/clinician/patient/:patientId/intake/profile',
  ClinicianPatientProgress = '/clinician/patient/:patientId/progress',
  ClinicianPatientProtocolsAndProgressions = '/clinician/patient/:patientId/protocols-and-progressions',
  ClinicianPatientSymptom = '/clinician/patient/:patientId/symptom/:symptom',
  ClinicianPatientSymptoms = '/clinician/patient/:patientId/symptoms',
  ClinicianRecoveryRx = '/clinician/patient/:patientId/recovery-rx',
  ClinicianTreatmentPlanning = '/clinician/patient/:patientId/treatment-planning',
  ClinicianTreatmentPlanningGoals = '/clinician/patient/:patientId/treatment-planning/goals',
  PatientSignIn = '/patient/sign-in',
  PatientOnboarding = '/patient/onboarding',
  PatientOnboardingProfile = '/patient/onboarding/profile',
  PatientHome = '/patient/home',
  PatientIntroduction = '/patient/introduction',
  PatientIntake = '/patient/intake',
  PatientIntakeFamilyHistory = '/patient/intake/family-history',
  PatientIntakeHealthHistory = '/patient/intake/health-history',
  PatientIntakeHealthHistoryAllergies = '/patient/intake/health-history/allergies',
  PatientIntakeHealthHistoryEnvironment = '/patient/intake/health-history/environment',
  PatientIntakeHealthHistoryImmunization = '/patient/intake/health-history/immunization',
  PatientIntakeHealthHistoryLifestyle = '/patient/intake/health-history/lifestyle',
  PatientIntakeHealthHistoryMedications = '/patient/intake/health-history/medications',
  PatientIntakeHealthHistoryReproductiveHealth = '/patient/intake/health-history/reproductive-health',
  PatientIntakeHealthHistoryStressAndSleep = '/patient/intake/health-history/stress-and-sleep',
  PatientIntakeProfile = '/patient/intake/profile',
  PatientHowAreYouTracker = '/patient/how-are-you',
  PatientSymptom = '/patient/symptom/:symptom',
  PatientSsoInfo = '/patient/symptom/:symptom/info',
  PatientCgs = '/patient/cgs',
  PatientOutcomeMeasures = '/patient/outcome-measures'
}

const buildUrl = (route: string, params: Record<string, any>) =>
  toPairs(params).reduce(
    (route, [key, value]) =>
      replace(route, new RegExp(`/:(${key})(/|$)`, 'g'), `/${value}$2`),
    route as string
  );

export interface ClinicianQueryParams {
  patientId: string;
}

export interface SymptomQueryParams {
  symptom: string;
}

export { Routes, buildUrl };
