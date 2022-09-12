import React from 'react';
import { CustomContent } from './styles';

interface IProps {
  children: React.ReactNode;
}

export const Content: React.FC<IProps> = ({ children }) => {
  return <CustomContent>{children}</CustomContent>;
};
