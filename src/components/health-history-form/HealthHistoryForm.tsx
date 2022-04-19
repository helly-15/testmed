import * as React from "react";
import {Form, Input, Select} from "antd";


export interface HealthHistoryFormProps {
  labels: string[];
  values: string[];
}

export const HealthHistoryForm: React.FC<HealthHistoryFormProps> = React.memo(
  ({labels, values}) => {
    const [form] = Form.useForm();
    const {Option} = Select;
    const handleValuesChange = ()=> null

    return (
      <div className="dynamic-form-list">
        <div className="dynamic-form-list__headers">
          {labels.map(x => (
            <h3 key={x}>{x}</h3>
          ))}
        </div>

        <Form
          form={form}
          name="health-history-form"
          layout="horizontal"
          onValuesChange={handleValuesChange}
        >
          {values.map(item => (
            <Form.Item label={item} key={item} style={{marginBottom: 0}}>
              <Form.Item
                name={`condition${item}`}
                style={{display: 'inline-block', width: 'calc(50% - 8px)'}}
              >
                <Select placeholder="Choose one">
                  <Option value="No">No</Option>
                  <Option value="Current">Current</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name={`year${item}`}
                style={{
                  display: 'inline-block',
                  width: 'calc(50% - 8px)',
                  margin: '0 8px'
                }}
              >
                <Input placeholder="Type in year of onset"/>
              </Form.Item>
            </Form.Item>))}
        </Form>
      </div>
    );
  }
);

HealthHistoryForm.displayName = 'HealthHistoryForm';
