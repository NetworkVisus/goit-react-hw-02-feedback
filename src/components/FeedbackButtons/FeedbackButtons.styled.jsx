import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 15px;
`;
export const Item = styled.li``;
export const Button = styled.button`
  background-color: transparent;
  font-size: 15px;
  border: 1px solid #777777;
  border-radius: 10px;
  padding: 7px;
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #777777;
  }
`;
