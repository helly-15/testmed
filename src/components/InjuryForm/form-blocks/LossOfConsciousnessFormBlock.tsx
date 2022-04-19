import React, { FC } from 'react';

import { Col, Form, Row, Select } from 'antd';
import { PatientInjuryKey } from 'documents';
import { oneThirdCol, ROW_GUTTER, selectProps } from 'utils/antd';

import { Hidden, YesNoSwitch } from 'components/index';

import { locDurationOptions } from '../select-options';

export interface LossOfConsciousnessFormBlockProps {
  lossOfConsciousness?: boolean;
}

export const LossOfConsciousnessFormBlock: FC<LossOfConsciousnessFormBlockProps> = ({
  lossOfConsciousness,
}) => (
  <Row gutter={ROW_GUTTER}>
    <Col {...oneThirdCol}>
      <Form.Item
        name={PatientInjuryKey.lossOfConsciousness}
        label="Loss of Consciousness"
      >
        <YesNoSwitch />
      </Form.Item>
    </Col>
    <Hidden onMobile={!lossOfConsciousness}>
      <Col {...oneThirdCol}>
        <Form.Item name={PatientInjuryKey.locDuration} label="Duration of LOC">
          <Select
            options={locDurationOptions}
            {...selectProps}
            disabled={!lossOfConsciousness}
          />
        </Form.Item>
      </Col>
    </Hidden>
  </Row>
);
