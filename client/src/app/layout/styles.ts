import { Menu } from 'antd';
import styled from 'styled-components';

export const CustomMenu = styled(Menu)`
  position: fixed;
  top: 60px;
  left: 0;
  width: 256px;
  height: calc(100vh - 120px);
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const CustomHeader = styled.nav`
  height: 60px;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  margin: 0 1rem;
  font-size: 30px;
  font-weight: bold;
  & > .logo {
    width: 100px;
  }
`;

export const CustomContent = styled.div`
  width: calc(100% - 256px);
  margin-left: auto;
  padding: 10px;
`;
