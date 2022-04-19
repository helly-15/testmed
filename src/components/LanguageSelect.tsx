import React from 'react';

import { Select } from 'antd';

import languages from 'data/languages.json';

export interface LanguageSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  withNoneOption?: boolean;
}

const options = languages.map(l => ({ label: l, value: l }));
const optionsWithNone = [{ label: 'None', value: 'None' }].concat(options);

export const LanguageSelect: React.FC<LanguageSelectProps> = ({
  value,
  onChange,
  placeholder,
  withNoneOption,
}) => (
  <Select
    showSearch
    value={value}
    onChange={onChange}
    options={withNoneOption ? optionsWithNone : options}
    placeholder={placeholder}
    filterOption={(input, option) =>
      option?.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  />
);
