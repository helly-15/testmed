import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';

export interface MenuItem {
  icon?: React.ReactNode;
  title: string;
  link: string;
  lvl?: number;
}

export interface SideMenuProps {
  selectedKey: string;
  items: MenuItem[];
  onClick?: MenuClickEventHandler;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  selectedKey,
  items,
  onClick
}) => (
  <Menu
    theme="dark"
    mode="inline"
    selectedKeys={[selectedKey]}
    onClick={onClick}
  >
    {items.map(x => (
      <Menu.Item key={x.link} icon={x.icon}>
        <Link to={x.link} style={{ paddingLeft: 24 * (x.lvl ?? 0) + 'px' }}>
          {x.title}
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);
