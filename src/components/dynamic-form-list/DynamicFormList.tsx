import './DynamicFormList.scss';

import * as React from 'react';

import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { debounce } from 'lodash';
import { FormHeaders } from '../form-headers/FormHeaders';

export interface DynamicFormListProps {
  labels: string[];
  keys: string[];
  values: Record<string, any>[];
  onItemChange: (item: any) => void | Promise<void>;
  onItemRemove: (id: string) => void | Promise<void>;
}

const inputWaitMs = 1000;

const DynamicFormList: React.FC<DynamicFormListProps> = React.memo(
  ({ labels, keys, values, onItemChange, onItemRemove }) => {
    const [newItem, setNewItem] = React.useState<Record<string, any>>({});

    const addNewItem = React.useMemo(
      () =>
        debounce(() => {
          if (!newItem[keys[0]]) return;

          onItemChange(newItem);
          setNewItem({});
        }, 500),
      [keys, newItem, onItemChange]
    );

    return (
      <div className="dynamic-form-list">
        <FormHeaders labels={labels} />
        <ul className="dynamic-form-list__values">
          {values.map((x, i) => (
            <li key={i}>
              {keys.map(k => (
                <Input
                  key={`${x.id}_${k}`}
                  defaultValue={x[k]}
                  onChange={debounce(
                    e => onItemChange({ ...x, [k]: e.target.value }),
                    inputWaitMs
                  )}
                />
              ))}
              <Button
                icon={<DeleteOutlined />}
                shape="circle"
                onClick={() => onItemRemove(x.id)}
              />
            </li>
          ))}
          <li>
            {keys.map((k, i) => (
              <Input
                key={k}
                value={newItem[keys[0]] ? newItem[k] : undefined}
                disabled={i > 0 && !newItem[keys[0]]}
                onChange={e =>
                  setNewItem(prev => ({ ...prev, [k]: e.target.value }))
                }
              />
            ))}
            <Button
              icon={<PlusOutlined />}
              shape="circle"
              type="primary"
              onClick={addNewItem}
            />
          </li>
        </ul>
      </div>
    );
  }
);

DynamicFormList.displayName = 'DynamicFormList';

export { DynamicFormList };
