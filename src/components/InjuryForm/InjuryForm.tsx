import React from 'react';

import { Form, Select } from 'antd';
import { PatientInjury, PatientInjuryKey } from 'documents';
import { omit } from 'lodash';
import { handleFormChange, selectProps } from 'utils/antd';
import { clear } from 'utils/object';

import { Divider } from 'components/index';

import {
  AmnesiaFormBlock,
  HeadMedicalImagingFormBlock,
  InjuryMechanismFormBlock,
  LossOfConsciousnessFormBlock,
  MainFormBlock
} from './form-blocks';
import { keyCondition, keyDependecy } from './key-dependecy';
import { immediateSymptomOptions } from './select-options';

export interface InjuryFormProps {
  value?: PatientInjury;
  onChange: (value: PatientInjury) => void;
}

export function InjuryForm(props: InjuryFormProps) {
  const { value, onChange } = props;

  function handleValuesChange(changedValue: any, changedValues: any) {
    let newValue: PatientInjury | undefined;
    const key = Object.keys(changedValue)[0];

    switch (key) {
      case PatientInjuryKey.injuryDate:
      case PatientInjuryKey.mriDate:
      case PatientInjuryKey.ctDate:
      case PatientInjuryKey.xRayDate:
      case PatientInjuryKey.otherHeadMedicalImagingDate:
        if (changedValues[key]) {
          newValue = { ...value, [key]: changedValues[key].startOf('day') };
        } else {
          clear(changedValues, [key]);
          newValue = omit(value, [key]);
        }
    }

    onChange(
      newValue
        ? newValue
        : handleFormChange(
            changedValue,
            changedValues,
            value,
            keyDependecy,
            keyCondition
          )
    );
  }

  return (
    <Form
      name="patient-injury"
      layout="vertical"
      onValuesChange={handleValuesChange}
      initialValues={{ ...value }}
    >
      <MainFormBlock />
      <Divider />

      <InjuryMechanismFormBlock injuryMechanism={value?.injuryMechanism} />
      <Divider />

      <AmnesiaFormBlock />
      <Divider />

      <LossOfConsciousnessFormBlock
        lossOfConsciousness={value?.lossOfConsciousness}
      />
      <Divider />

      <Form.Item name="immediateSymptoms" label="Immediate Symptoms">
        <Select options={immediateSymptomOptions} {...selectProps} />
      </Form.Item>
      <Divider />

      <HeadMedicalImagingFormBlock injury={value} />
    </Form>
  );
}
