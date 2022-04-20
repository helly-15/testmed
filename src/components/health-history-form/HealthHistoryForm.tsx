import * as React from 'react';
import { Form, Input, Select } from 'antd';
import { FormHeaders } from '../form-headers/FormHeaders';
import './HealthHistoryForm.scss';
import {
  healthHistoryDeceases,
  HealthConditionOptions,
  healthHistoryHeaders,
  HealthConditionAnswers,
  healthHistoryKeyCondition
} from './consts';
import { PatientHealthHistory } from '../../documents';
import { CancerCheckboxGroup, keyDependency } from '../cancer-checkbox-group';
import { handleFormChange } from '../../utils/antd';

interface HealthHistoryFormProps {
  value?: PatientHealthHistory;
  onChange: (value: PatientHealthHistory) => void;
}

export const HealthHistoryForm: React.FC<HealthHistoryFormProps> = React.memo(
  ({ value, onChange }) => {
    const [form] = Form.useForm();
    const handleValuesChange = React.useCallback(
      (changedValue: any, changedValues: any) => {
        if (Object.keys(changedValue)[0] === 'cancer') {
          form.resetFields();
        }

        onChange(
          handleFormChange(
            changedValue,
            changedValues,
            value,
            keyDependency,
            healthHistoryKeyCondition
          )
        );
      },
      [form, onChange, value]
    );
    console.log(value);
    return (
      <div className="health-history-form">
        <FormHeaders labels={healthHistoryHeaders} />
        <Form
          form={form}
          name="health-history-form"
          layout="horizontal"
          onValuesChange={handleValuesChange}
        >
          {healthHistoryDeceases.map(item => (
            <Form.Item
              label={item.label}
              key={item.name}
              style={{ marginBottom: 0 }}
              className={'health-history-form__line-wrapper'}
            >
              <Form.Item
                name={item.name}
                className={'health-history-form__condition'}
              >
                <Select
                  placeholder="Choose one"
                  options={HealthConditionOptions}
                ></Select>
              </Form.Item>
              <Form.Item
                name={`year${item}`}
                className={'health-history-form__year'}
              >
                <Input placeholder="Type in year of onset" />
              </Form.Item>
            </Form.Item>
          ))}
          {(value?.cancer === HealthConditionAnswers.Current ||
            value?.cancer === HealthConditionAnswers.Managed) && (
            <CancerCheckboxGroup />
          )}
        </Form>
      </div>
    );
  }
);

HealthHistoryForm.displayName = 'HealthHistoryForm';
