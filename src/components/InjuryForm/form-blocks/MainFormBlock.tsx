import React from 'react';

import { Col, DatePicker, Form, Row, Select } from 'antd';
import { dateFormat } from 'constants/date-time';
import { PatientInjuryKey } from 'documents';
import { oneThirdCol, ROW_GUTTER, selectProps } from 'utils/antd';

import { impactLocationOptions } from '../select-options';

export const MainFormBlock: React.FC = () => (
  <Row gutter={ROW_GUTTER}>
    <Col {...oneThirdCol}>
      <Form.Item name={PatientInjuryKey.injuryDate} label="Date of Injury">
        <DatePicker format={dateFormat} />
      </Form.Item>
    </Col>
    <Col {...oneThirdCol}>
      <Form.Item
        name={PatientInjuryKey.impactLocation}
        label="Location of Impact"
      >
        <Select options={impactLocationOptions} {...selectProps} />
      </Form.Item>
    </Col>
  </Row>
);
