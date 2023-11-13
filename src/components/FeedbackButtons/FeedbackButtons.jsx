import * as Styled from './FeedbackButtons.styled';

export const FeedbackButtons = ({ proceedFeedback }) => {
  return (
    <Styled.List>
      <Styled.Item>
        <Styled.Button onClick={() => proceedFeedback('good')}>
          Good
        </Styled.Button>
      </Styled.Item>
      <Styled.Item>
        <Styled.Button onClick={() => proceedFeedback('neutral')}>
          Neutral
        </Styled.Button>
      </Styled.Item>
      <Styled.Item>
        <Styled.Button onClick={() => proceedFeedback('bad')}>
          Bad
        </Styled.Button>
      </Styled.Item>
    </Styled.List>
  );
};
