import * as React from 'react';
import { Form, Input } from 'antd';
import './FormTextarea.scss';

export const FormTextarea: React.FC = () => {
  return (
    <Form.Item className="hh-comments" name="comments" label="Comments">
      <Input.TextArea
        rows={5}
        placeholder="Please add any details you consider important."
      />
    </Form.Item>
  );
};
