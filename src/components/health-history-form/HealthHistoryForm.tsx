import * as React from 'react';
import { Form, Input, Select } from 'antd';
import { FormHeaders } from '../form-headers/FormHeaders';
import './HealthHistoryForm.scss';
import {
  healthHistoryDeceases,
  HealthConditionOptions,
  healthHistoryHeaders
} from './consts';

export const HealthHistoryForm: React.FC = React.memo(() => {
  const [form] = Form.useForm();
  const handleValuesChange = () => null;

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
            label={item}
            key={item}
            style={{ marginBottom: 0 }}
            className={'health-history-form__line-wrapper'}
          >
            <Form.Item
              name={`condition${item}`}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
              className={'health-history-form__condition'}
            >
              <Select
                placeholder="Choose one"
                options={HealthConditionOptions}
              ></Select>
            </Form.Item>
            <Form.Item
              name={`year${item}`}
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px'
              }}
              className={'health-history-form__year'}
            >
              <Input placeholder="Type in year of onset" />
            </Form.Item>
          </Form.Item>
        ))}
      </Form>
    </div>
  );
});

HealthHistoryForm.displayName = 'HealthHistoryForm';
