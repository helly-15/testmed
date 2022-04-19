import './ProfileForm.scss';

import * as React from 'react';

import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { dateFormat } from 'constants/date-time';
import { yesNoOptions } from 'constants/yes-no-answer';
import { PatientProfile, PatientProfileKey } from 'documents';
import { omit } from 'lodash';
import {
  handleFormChange,
  oneFourthCol,
  oneThirdCol,
  ROW_GUTTER,
  selectProps
} from 'utils/antd';
import { clear } from 'utils/object';

import { Divider, LanguageSelect } from 'components/index';

import { keyCondition, keyDependency } from './key-dependency';
import {
  bloodTypeOptions,
  ethnicityOptions,
  eyeColors,
  genderOptions,
  hairColors,
  maritalStatuses,
  occupationOptions,
  skinColors
} from './select-options';

export interface ProfileFormProps {
  value?: PatientProfile;
  onChange: (value: PatientProfile) => void;
  onDone?: (value: any) => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  value,
  onChange,
  onDone
}) => {
  const handleValuesChange = React.useCallback(
    (changedValue: any, changedValues: any) => {
      let newValue: PatientProfile | undefined;
      const key = Object.keys(changedValue)[0];
      if (key === PatientProfileKey.birthDate) {
        if (changedValues[key]) {
          const birthDate = changedValues[key].startOf('day');
          newValue = { ...value, [key]: birthDate };
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
              keyDependency,
              keyCondition
            )
      );
    },
    [onChange, value]
  );

  return (
    <Form
      className="profile-form"
      name="patient_profile"
      layout="vertical"
      onValuesChange={handleValuesChange}
      initialValues={{ ...value }}
      onFinish={onDone}
    >
      <Row gutter={ROW_GUTTER}>
        <Col {...oneThirdCol}>
          <Form.Item
            name={PatientProfileKey.birthDate}
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: 'Date of Birth is required'
              }
            ]}
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
        </Col>
        <Col {...oneThirdCol}>
          <Form.Item
            name={PatientProfileKey.sex}
            label="Sex"
            rules={[
              {
                required: true,
                message: 'Sex is required'
              }
            ]}
          >
            <Select options={genderOptions} {...selectProps} />
          </Form.Item>
        </Col>
        <Col {...oneThirdCol}>
          <Form.Item name={PatientProfileKey.ethnicity} label="Ethnicity">
            <Select options={ethnicityOptions} {...selectProps} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={ROW_GUTTER}>
        <Col {...oneThirdCol}>
          <Form.Item
            name={PatientProfileKey.primaryLanguage}
            label="Primary Language"
          >
            <LanguageSelect {...selectProps} />
          </Form.Item>
        </Col>
        <Col {...oneThirdCol}>
          <Form.Item
            name={PatientProfileKey.adopted}
            label="Are you adopted or unsure of your family history?"
          >
            <Select options={yesNoOptions} {...selectProps} />
          </Form.Item>
        </Col>
        <Col {...oneThirdCol}>
          <Form.Item name={PatientProfileKey.occupation} label="Occupation">
            <Select options={occupationOptions} {...selectProps} />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={ROW_GUTTER}>
        <Col {...oneFourthCol}>
          <Form.Item name={PatientProfileKey.height} label="Height">
            <Input />
          </Form.Item>
        </Col>
        <Col {...oneFourthCol}>
          <Form.Item name={PatientProfileKey.weight} label="Weight">
            <Input />
          </Form.Item>
        </Col>
        <Col {...oneFourthCol}>
          <Form.Item
            name={PatientProfileKey.waistMeasurement}
            label="Waist measurement"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col {...oneFourthCol}>
          <Form.Item name={PatientProfileKey.bloodType} label="Blood Type">
            <Select options={bloodTypeOptions} {...selectProps} />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={ROW_GUTTER}>
        <Col {...oneThirdCol}>
          <Form.Item
            name={PatientProfileKey.totalYearsOfEducation}
            label="Total Years of Education"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col {...oneThirdCol}>
          <Form.Item
            name={PatientProfileKey.hairColor}
            label="What is your natural hair color?"
          >
            <Select options={hairColors} {...selectProps} />
          </Form.Item>
        </Col>
        <Col {...oneThirdCol}>
          <Form.Item
            name={PatientProfileKey.eyeColor}
            label="What is the natural color of your eyes?"
          >
            <Select options={eyeColors} {...selectProps} />
          </Form.Item>
        </Col>
        <Col {...oneThirdCol}>
          <Form.Item
            name={PatientProfileKey.skinColor}
            label="What is your skin color?"
          >
            <Select options={skinColors} {...selectProps} />
          </Form.Item>
        </Col>
        <Col {...oneThirdCol}>
          <Form.Item
            name={PatientProfileKey.maritalStatus}
            label="Current Marital Status"
          >
            <Select options={maritalStatuses} {...selectProps} />
          </Form.Item>
        </Col>
      </Row>
      {onDone && (
        <Button
          type="primary"
          className="profile-form__done-button"
          block
          htmlType="submit"
        >
          Done
        </Button>
      )}
    </Form>
  );
};
