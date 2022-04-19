import './CancerCheckboxGroup.scss';

import { Col, Form, Input, Row } from 'antd';
import { ROW_GUTTER } from 'utils/antd';

import { YesNoCheckboxGroup } from '../yes-no-checkbox-group';
import { cancerFields } from './consts';

export const CancerCheckboxGroup: React.FC = () => {
  return (
    <div className="cancer-checkbox-group">
      <Row gutter={ROW_GUTTER} className="cancer-checkbox-group__header">
        <Col offset={6} span={6}>
          Yes
        </Col>
        <Col span={6}>No</Col>
        <Col span={6}>Don&apos;t know</Col>
      </Row>
      {cancerFields.map(item => (
        <Form.Item
          className="cancer-checkbox-group__form-item"
          key={item.name[1]}
          name={item.name}
          label={item.label}
        >
          <YesNoCheckboxGroup />
        </Form.Item>
      ))}
      <Form.Item
        className="cancer-checkbox-group__form-item"
        name="cancerOther"
        label="Other"
      >
        <Input />
      </Form.Item>
    </div>
  );
};
