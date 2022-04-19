import React from 'react';

import { Col, DatePicker, Form, Input, Row } from 'antd';
import { dateFormat } from 'constants/date-time';
import { PatientInjury, PatientInjuryKey } from 'documents';
import { oneThirdCol, ROW_GUTTER } from 'utils/antd';

import { Hidden, YesNoSwitch } from 'components/index';

type MiType =
  | PatientInjuryKey.mri
  | PatientInjuryKey.ct
  | PatientInjuryKey.xRay
  | PatientInjuryKey.otherHeadMedicalImaging;

export interface HeadMedicalImagingTypeProps {
  type: MiType;
  typeLabel?: string;
  injury?: PatientInjury;
}

export const HeadMedicalImagingType: React.FC<HeadMedicalImagingTypeProps> = ({
  type,
  typeLabel,
  injury,
}) => {
  const typeInputDisabled = !injury?.headMedicalImaging;

  return (
    <Row gutter={ROW_GUTTER}>
      <Col {...oneThirdCol}>
        <Form.Item
          name={type}
          label={typeLabel ? typeLabel : type.toUpperCase()}
        >
          {type === PatientInjuryKey.otherHeadMedicalImaging ? (
            <Input disabled={typeInputDisabled} />
          ) : (
            <YesNoSwitch disabled={typeInputDisabled} />
          )}
        </Form.Item>
      </Col>
      <Hidden onMobile={!(injury && injury[type])}>
        <Col {...oneThirdCol}>
          <Form.Item name={`${type}Date`} label="Date">
            <DatePicker
              disabled={!injury || !injury[type]}
              format={dateFormat}
            />
          </Form.Item>
        </Col>
      </Hidden>
    </Row>
  );
};
