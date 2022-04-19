import { InternalNamePath } from 'antd/lib/form/interface';

interface FormItem {
  name: InternalNamePath;
  label: string;
  tooltip?: string;
}

export const keyDependency = {
  cancer: ['cancerSheet']
};

export const cancerFields: FormItem[] = [
  { name: ['cancerSheet', 'bladder'], label: 'Bladder' },
  { name: ['cancerSheet', 'colon'], label: 'Colon' },
  { name: ['cancerSheet', 'kidney'], label: 'Kidney' },
  { name: ['cancerSheet', 'lung'], label: 'Lung' },
  { name: ['cancerSheet', 'pancreatic'], label: 'Pancreatic' },
  { name: ['cancerSheet', 'prostate'], label: 'Prostate' },
  { name: ['cancerSheet', 'stomach'], label: 'Stomach' },
  { name: ['cancerSheet', 'melanoma'], label: 'Melanoma' }
];
