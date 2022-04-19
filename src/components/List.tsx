import React from 'react';

import clsx from 'clsx';

export interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

export function List<T>(props: ListProps<T>) {
  const { items, renderItem, className } = props;
  return (
    <ul className={clsx('crx-list', className)}>
      {items.map((item, i) => (
        <li key={i} className="crx-list__item">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
