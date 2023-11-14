import * as Styled from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Styled.Section>
      <Styled.Title>{title}</Styled.Title>
      {children}
    </Styled.Section>
  );
};
