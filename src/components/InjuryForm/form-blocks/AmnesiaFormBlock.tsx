import React from 'react';

import { Col, Form, Row } from 'antd';
import { PatientInjuryKey } from 'documents';
import { oneThirdCol, ROW_GUTTER } from 'utils/antd';

import { YesNoSwitch } from 'components/index';

export const AmnesiaFormBlock: React.FC = () => (
  <Row gutter={ROW_GUTTER}>
    <Col {...oneThirdCol}>
      <Form.Item
        name={PatientInjuryKey.retrogradeAmnesia}
        label="Retrograde Amnesia"
      >
        <YesNoSwitch />
      </Form.Item>
    </Col>
    <Col {...oneThirdCol}>
      <Form.Item
        name={PatientInjuryKey.anterogradeAmnesia}
        label="Anterograde Amnesia"
      >
        <YesNoSwitch />
      </Form.Item>
    </Col>
    <Col {...oneThirdCol}>
      <Form.Item name={PatientInjuryKey.seizures} label="Seizures">
        <YesNoSwitch />
      </Form.Item>
    </Col>
  </Row>
);
