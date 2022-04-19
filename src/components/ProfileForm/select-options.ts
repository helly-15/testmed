import {
  BloodType,
  Ethnicity,
  Gender,
  Occupation,
  OccupationType,
  StudentLevel
} from 'documents';

export const genderOptions = [
  { label: 'Male', value: Gender.Male },
  { label: 'Female', value: Gender.Female },
  { label: 'Other', value: Gender.Other }
];

export const ethnicityOptions = [
  { label: 'American Indian or Alaska Native', value: Ethnicity.Indian },
  { label: 'Asian', value: Ethnicity.Asian },
  { label: 'Black or African American', value: Ethnicity.Black },
  { label: 'Hispanic or Latino', value: Ethnicity.Latino },
  {
    label: 'Native Hawaiian or Other Pacific Islander',
    value: Ethnicity.Islander
  },
  { label: 'White', value: Ethnicity.White }
];

export const occupationOptions = [
  { label: 'Student', value: Occupation.Student },
  { label: 'Working', value: Occupation.Working },
  { label: 'Unemployed', value: Occupation.Unemployed },
  { label: 'Disability', value: Occupation.Disability },
  { label: 'Retired', value: Occupation.Retired }
];

export const studentLevelOptions = [
  { label: 'Elementary', value: StudentLevel.Elementary },
  { label: 'HighSchool', value: StudentLevel.HighSchool },
  { label: 'University', value: StudentLevel.University },
  { label: 'Undergrad', value: StudentLevel.Undergrad },
  { label: 'University Graduate', value: StudentLevel.UniversityGraduate }
];

export const occupationTypeOptions = [
  { label: 'Full Time', value: OccupationType.FullTime },
  { label: 'Part Time', value: OccupationType.PartTime }
];

export const bloodTypeOptions = [
  { label: "Don't know", value: BloodType.Unknown },
  { label: 'O-', value: BloodType.ONeg },
  { label: 'A-', value: BloodType.ANeg },
  { label: 'B-', value: BloodType.BNeg },
  { label: 'AB-', value: BloodType.ABNeg },
  { label: 'O+', value: BloodType.OPos },
  { label: 'A+', value: BloodType.APos },
  { label: 'B+', value: BloodType.BPos },
  { label: 'AB+', value: BloodType.ABPos }
];

export const hairColors = [
  { label: 'blond', value: 'blond' },
  { label: 'brown', value: 'brown' },
  { label: 'red', value: 'red' }
];

export const eyeColors = [
  { label: 'black', value: 'black' },
  { label: 'blue', value: 'blue' },
  { label: 'brown', value: 'brown' },
  { label: 'green', value: 'green' }
];

export const skinColors = [
  { label: 'black', value: 'black' },
  { label: 'dark', value: 'dark' },
  { label: 'fair', value: 'fair' },
  { label: 'white', value: 'white' }
];

export const maritalStatuses = [
  { label: 'married', value: 'married' },
  { label: 'never married', value: 'never married' },
  { label: 'divorced', value: 'divorced' },
  { label: 'widowed', value: 'widowed' }
];
