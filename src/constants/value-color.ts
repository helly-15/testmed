import { roundSymptomValue } from 'utils/business';

const colors = ['#5FC47A', '#F2AA18', '#FB9334', '#FC615B'];
const colorMap = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3];

export const getValueColor = (value: number) =>
  colors[colorMap[roundSymptomValue(value)]];
