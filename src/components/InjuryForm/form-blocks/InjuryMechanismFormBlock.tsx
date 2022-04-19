import React, { FC } from 'react';

import { Col, Form, Row, Select } from 'antd';
import { InjuryMechanism, PatientInjuryKey } from 'documents';
import { oneThirdCol, ROW_GUTTER } from 'utils/antd';

import { Hidden, YesNoSwitch } from 'components/index';

import { injuryMechanismOptions } from '../select-options';

export interface InjuryMechanismFormBlockProps {
  injuryMechanism?: InjuryMechanism;
}

export const InjuryMechanismFormBlock: FC<InjuryMechanismFormBlockProps> = ({
  injuryMechanism,
}) => {
  const isMva = injuryMechanism === InjuryMechanism.MVA;

  return (
    <Row gutter={ROW_GUTTER}>
      <Col {...oneThirdCol}>
        <Form.Item
          name={PatientInjuryKey.injuryMechanism}
          label="Mechanism of Injury"
        >
          <Select options={injuryMechanismOptions} />
        </Form.Item>
      </Col>
      <Hidden onMobile={!isMva}>
        <Col {...oneThirdCol}>
          <Form.Item name={PatientInjuryKey.restrained} label="Restrained">
            <YesNoSwitch disabled={!isMva} />
          </Form.Item>
        </Col>
        <Col {...oneThirdCol}>
          <Form.Item name={PatientInjuryKey.airbags} label="Airbags">
            <YesNoSwitch disabled={!isMva} />
          </Form.Item>
        </Col>
      </Hidden>
    </Row>
  );
};
