import { Moment } from 'moment';

import { YesNoAnswer } from '../constants/yes-no-answer';
import { Document } from './document';

export enum BloodType {
  Unknown = 'Unknown',
  APos = 'A+',
  ANeg = 'A-',
  BPos = 'B+',
  BNeg = 'B-',
  OPos = 'O+',
  ONeg = 'O-',
  ABPos = 'AB+',
  ABNeg = 'AB-'
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export enum Ethnicity {
  Asian = 'asian',
  Black = 'black',
  Latino = 'latino',
  Indian = 'indian',
  Islander = 'islander',
  White = 'white'
}

export enum Occupation {
  Student = 'student',
  Working = 'working',
  Unemployed = 'unemployed',
  Disability = 'disability',
  Retired = 'retired'
}

export enum OccupationType {
  PartTime = 'partTime',
  FullTime = 'fullTime'
}

export enum StudentLevel {
  Elementary = 'elementary',
  HighSchool = 'highSchool',
  University = 'university',
  Undergrad = 'undergrad',
  UniversityGraduate = 'universityGraduate'
}

export enum PatientProfileKey {
  adopted = 'adopted',
  birthDate = 'birthDate',
  bloodType = 'bloodType',
  ethnicity = 'ethnicity',
  eyeColor = 'eyesColor',
  genderId = 'genderId',
  hairColor = 'hairColor',
  height = 'height',
  maritalStatus = 'maritalStatus',
  occupation = 'occupation',
  occupationProf = 'occupationProf',
  occupationType = 'occupationType',
  primaryLanguage = 'primaryLanguage',
  secondaryLanguage = 'secondaryLanguage',
  sex = 'sex',
  skinColor = 'skinColor',
  studentLevel = 'studentLevel',
  totalYearsOfEducation = 'totalYearsOfEducation',
  waistMeasurement = 'waistMeasurement',
  weight = 'weight'
}

export interface PatientProfile extends Document {
  adopted?: YesNoAnswer;
  birthDate?: Moment;
  bloodType?: BloodType;
  ethnicity?: Ethnicity;
  genderId?: Gender;
  height?: string;
  occupation?: Occupation;
  occupationProf?: string;
  occupationType?: OccupationType;
  primaryLanguage?: string;
  secondaryLanguage?: string;
  sex?: Gender;
  studentLevel?: StudentLevel;
  waistMeasurement?: string;
  weight?: string;
}
