import { YesNoAnswer } from '../constants/yes-no-answer';
import { Document } from './document';

export interface CancerSheet {
  bladder?: YesNoAnswer;
  colon?: YesNoAnswer;
  kidney?: YesNoAnswer;
  lung?: YesNoAnswer;
  pancreatic?: YesNoAnswer;
  prostate?: YesNoAnswer;
  stomach?: YesNoAnswer;
  melanoma?: YesNoAnswer;
  other?: string;
}

export interface PatientFamilyHistory extends Document {
  diabetes?: YesNoAnswer;
  mentalCondition?: YesNoAnswer;
  stroke?: YesNoAnswer;
  heartAttach?: YesNoAnswer;
  osteoporosis?: YesNoAnswer;
  cancer?: YesNoAnswer;
  cancerSheet?: CancerSheet;
}
