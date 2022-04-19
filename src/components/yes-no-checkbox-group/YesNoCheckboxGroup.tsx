import './YesNoCheckboxGroup.scss';

import React from 'react';

import { Checkbox, Col, Row } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { YesNoAnswer } from 'constants/yes-no-answer';

interface YesNoCheckboxProps {
  value?: YesNoAnswer;
  onChange?: (value: YesNoAnswer | undefined) => void;
}

const order = [YesNoAnswer.Yes, YesNoAnswer.No, YesNoAnswer.Unknown];

export const YesNoCheckboxGroup: React.FC<YesNoCheckboxProps> = ({
  value,
  onChange
}) => {
  const handleChange = React.useCallback(
    ({ target }: CheckboxChangeEvent) =>
      onChange?.(target.checked ? target.value : undefined),
    [onChange]
  );

  return (
    <Row className="yes-no-checkbox">
      {order.map(x => (
        <Col key={x} span={8}>
          <Checkbox value={x} checked={value === x} onChange={handleChange} />
        </Col>
      ))}
    </Row>
  );
};
