import * as React from 'react';

import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Form, Row, Select } from 'antd';
import { YesNoAnswer, yesNoOptions } from 'constants/yes-no-answer';
import { PatientFamilyHistory } from 'documents';
import {
  handleFormChange,
  oneThirdCol,
  ROW_GUTTER,
  selectProps
} from 'utils/antd';

import { CancerCheckboxGroup, keyDependency } from '../cancer-checkbox-group';
import { keyCondition, selectFields } from './consts';

interface FamilyHistoryFormProps {
  value?: PatientFamilyHistory;
  onChange: (value: PatientFamilyHistory) => void;
}

export const FamilyHistoryForm: React.FC<FamilyHistoryFormProps> = ({
  value,
  onChange
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue({ ...value });
  }, [form, value]);

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
          keyCondition
        )
      );
    },
    [form, onChange, value]
  );

  return (
    <Form
      form={form}
      name="family-history-form"
      layout="vertical"
      onValuesChange={handleValuesChange}
    >
      <Row gutter={ROW_GUTTER}>
        {selectFields.map(item => (
          <Col {...oneThirdCol} key={item.name}>
            <Form.Item
              name={item.name}
              label={item.label}
              tooltip={
                item.tooltip && {
                  title: item.tooltip,
                  icon: <InfoCircleOutlined />
                }
              }
            >
              <Select options={yesNoOptions} {...selectProps} />
            </Form.Item>
          </Col>
        ))}
      </Row>
      {value?.cancer === YesNoAnswer.Yes && <CancerCheckboxGroup />}
    </Form>
  );
};
