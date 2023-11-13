import * as Styled from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <Styled.List>
      <Styled.Item>
        <Styled.Title>Good: {good}</Styled.Title>
      </Styled.Item>
      <Styled.Item>
        <Styled.Title>Neutral: {neutral}</Styled.Title>
      </Styled.Item>
      <Styled.Item>
        <Styled.Title>Bad: {bad}</Styled.Title>
      </Styled.Item>
      <Styled.Item>
        <Styled.Title>Total: {total}</Styled.Title>
      </Styled.Item>
      <Styled.Item>
        <Styled.Title>
          Positive feedback:{' '}
          <Styled.Span positive={positive}>{positive}%</Styled.Span>
        </Styled.Title>
      </Styled.Item>
    </Styled.List>
  );
};
