import styled from 'styled-components';

interface IPropsCustomScroll {
  isVertical?: boolean;
}

export const CustomScroll = styled.div<IPropsCustomScroll>`
  overflow-y: ${(props) => (props.isVertical ? 'hidden' : 'auto')};
  overflow-x: ${(props) => (props.isVertical ? 'auto' : 'hidden')};
`;
