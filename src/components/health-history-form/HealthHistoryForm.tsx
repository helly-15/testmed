import * as React from 'react';
import { Form, Input, Select } from 'antd';
import { FormHeaders } from '../form-headers/FormHeaders';
import './HealthHistoryForm.scss';
import {
  healthHistoryDeceases,
  HealthConditionOptions,
  healthHistoryHeaders,
  HealthConditionAnswers
} from './consts';
import { PatientHealthHistory } from '../../documents';
import { CancerCheckboxGroup } from '../cancer-checkbox-group';

interface HealthHistoryFormProps {
  value?: PatientHealthHistory;
}

export const HealthHistoryForm: React.FC<HealthHistoryFormProps> = React.memo(
  ({ value }) => {
    const [form] = Form.useForm();

    React.useEffect(() => {
      form.setFieldsValue({ ...value });
    }, [form, value]);

    return (
      <div className="health-history-form">
        <FormHeaders labels={healthHistoryHeaders} hideInMobiles />

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
              name={`year${item.name}`}
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
      </div>
    );
  }
);

HealthHistoryForm.displayName = 'HealthHistoryForm';
