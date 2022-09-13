import { BarChartOutlined, MailOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomMenu } from './styles';

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
};

const items: MenuProps['items'] = [
  getItem('Wallet', '/wallet', <MailOutlined />, null),
  getItem('Chart', '/chart', <BarChartOutlined />, null)
];

export const MainMenu = () => {
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = useCallback(
    (e) => {
      navigate(e.key);
    },
    [navigate]
  );

  return <CustomMenu onClick={onClick} defaultSelectedKeys={[window.location.pathname]} mode="inline" items={items} />;
};
