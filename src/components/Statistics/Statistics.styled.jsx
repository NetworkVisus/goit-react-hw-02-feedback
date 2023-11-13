import styled from 'styled-components';

export const Title = styled.p``;
export const List = styled.ul``;
export const Item = styled.li``;
export const Span = styled.span`
  color: ${({ positive }) => {
    if (positive >= 75) return '#1ea329';
    if (positive >= 51) return '#ffd900';
    if (positive >= 26) return '#ff7b00';
    return 'red';
  }};
`;
