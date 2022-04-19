import './YesNoSwitch.scss';

import React from 'react';

import { Radio } from 'antd';
import clsx from 'clsx';

export interface YesNoSwitchProps {
  defaultValue?: boolean;
  value?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

export const YesNoSwitch: React.FC<YesNoSwitchProps> = ({
  defaultValue,
  value,
  onChange,
  disabled
}) => (
  <div className="crx-yes-no-switch">
    <div
      className={clsx({
        'ant-input': true,
        'crx-yes-no-switch__label': true,
        disabled
      })}
    >
      Choose an answer
    </div>
    <Radio.Group
      className="crx-yes-no-switch__button-group"
      defaultValue={defaultValue}
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
      disabled={disabled}
    >
      <Radio.Button value={true}>Yes</Radio.Button>
      <Radio.Button value={false}>No</Radio.Button>
    </Radio.Group>
  </div>
);
