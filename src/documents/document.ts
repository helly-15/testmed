import { Moment } from 'moment';

/**
 * Entity collection names in firestore
 *
 * Add in alphabetical order, please
 */
export enum Collection {
  PatientAllergies = 'patientAllergies',
  PatientFamilyHistories = 'patientFamilyHistories',
  PatientHealthHistories = 'patientHealthHistories',
  PatientInjuries = 'patientInjuries',
  PatientPersonalHistory = 'patientPersonalHistories',
  PatientProfiles = 'patientProfiles',
  Patients = 'patients',
  TreatmentGoals = 'treatmentGoals'
}

/* Add in alphabetical order, please */
export enum PatientSubcollection {
  ClinicianWorksheets = 'clinicianWorksheets',
  Goals = 'goals',
  HowAreYou = 'howAreYou',
  InventoriesCgs = 'inventoriesCgs',
  Onboardings = 'onboardings',
  Problems = 'problems',
  QualityOfLife = 'qualityOfLife',
  Scores = 'scores',
  SectionAnswers = 'sectionAnswers',
  SubSymptoms = 'subSymptoms',
  SymptomCalcInfo = 'symptomCalcInfo',
  Symptoms = 'symptoms'
}

export enum PatientHealthHistorySubcollection {
  OtherIssues = 'otherIssues',
  Medications = 'medications'
}

export const ItemSubcollection = 'items';

export interface DocumentMetadata {
  schemaVersion: string;
  created: Moment;
  updated: Moment;
}

export interface Document {
  id?: string;
  metadata?: DocumentMetadata;
}
