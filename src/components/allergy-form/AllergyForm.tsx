import * as React from 'react';

import { Form, Input } from 'antd';
import { PatientAllergy, PatientAllergyItem } from 'documents';
import { handleFormChange } from 'utils/antd';

import { DynamicFormList } from 'components/index';

interface AllergyFormProps {
  value: PatientAllergy | undefined;
  items: PatientAllergyItem[];
  onChange: (doc: PatientAllergy) => void;
  onItemChange: (item: PatientAllergyItem) => void;
  onItemRemove: (id: string) => void;
}

const labels = ['Name', 'Approximate onset', 'Note'];
const keys = ['name', 'approximateOnset', 'note'];

export const AllergyForm: React.FC<AllergyFormProps> = ({
  value,
  items,
  onChange,
  onItemChange,
  onItemRemove
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    form.setFieldsValue({ ...value });
  }, [form, value]);

  const onValuesChange = React.useCallback(
    (changedValue: any, changedValues: any) =>
      onChange(handleFormChange(changedValue, changedValues, value)),
    [onChange, value]
  );

  return (
    <Form
      form={form}
      name="allergies-form"
      layout="vertical"
      onValuesChange={onValuesChange}
    >
      <DynamicFormList
        labels={labels}
        keys={keys}
        values={items}
        onItemChange={onItemChange}
        onItemRemove={onItemRemove}
      />
      <Form.Item className="hh-comments" name="comments" label="Comments">
        <Input.TextArea
          rows={5}
          placeholder="Please add any details you consider important."
        />
      </Form.Item>
    </Form>
  );
};
