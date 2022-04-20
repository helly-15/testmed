import { YesNoAnswer } from 'constants/yes-no-answer';

export interface FormItem {
  name: string;
  label: string;
  tooltip?: string;
}

export const selectFields: FormItem[] = [
  { name: 'diabetes', label: 'Diabetes' },
  {
    name: 'mentalCondition',
    label: 'Depression, Anxiety or other mental condition'
  },
  { name: 'stroke', label: 'Stroke' },
  {
    name: 'heartAttach',
    label: 'Heart Attach at young age',
    tooltip: '65 for men and 55 for women'
  },
  {
    name: 'osteoporosis',
    label: 'Osteoporosis',
    tooltip: 'History of fractures from minor accidents'
  },
  { name: 'cancer', label: 'Cancer' }
];

export const keyCondition = {
  cancer: (value: YesNoAnswer) => value !== YesNoAnswer.Yes
};
