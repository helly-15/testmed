import React, { FC } from 'react';

import { Col, Form, Row } from 'antd';
import { PatientInjury, PatientInjuryKey } from 'documents';
import { oneThirdCol, ROW_GUTTER } from 'utils/antd';

import { Hidden, YesNoSwitch } from 'components/index';

import { HeadMedicalImagingType } from './HeadMedicalImagingType';

export interface HeadMedicalImagingFormBlockProps {
  injury?: PatientInjury;
}

export const HeadMedicalImagingFormBlock: FC<HeadMedicalImagingFormBlockProps> = ({
  injury,
}) => (
  <>
    <Row gutter={ROW_GUTTER}>
      <Col {...oneThirdCol}>
        <Form.Item
          name={PatientInjuryKey.headMedicalImaging}
          label="Medical Imaging of Head"
        >
          <YesNoSwitch />
        </Form.Item>
      </Col>
    </Row>
    <Hidden onMobile={!injury?.headMedicalImaging}>
      <HeadMedicalImagingType type={PatientInjuryKey.mri} injury={injury} />
      <HeadMedicalImagingType type={PatientInjuryKey.ct} injury={injury} />
      <HeadMedicalImagingType
        type={PatientInjuryKey.xRay}
        typeLabel="X-Ray"
        injury={injury}
      />
      <HeadMedicalImagingType
        type={PatientInjuryKey.otherHeadMedicalImaging}
        typeLabel="Other"
        injury={injury}
      />
      <Row gutter={ROW_GUTTER}>
        <Col {...oneThirdCol}>
          <Form.Item
            name={PatientInjuryKey.skullFracture}
            label="Skull Fracture (on imaging)"
          >
            <YesNoSwitch disabled={!injury?.headMedicalImaging} />
          </Form.Item>
        </Col>
        <Col {...oneThirdCol}>
          <Form.Item
            name={PatientInjuryKey.brainBleed}
            label="Brain Bleed (on imaging)"
          >
            <YesNoSwitch disabled={!injury?.headMedicalImaging} />
          </Form.Item>
        </Col>
      </Row>
    </Hidden>
  </>
);
