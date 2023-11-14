import * as Styled from './FeedbackButtons.styled';

export const FeedbackButtons = ({ options, proceedFeedback }) => {
  return (
    <Styled.List>
      {options.map(el => (
        <Styled.Item key={el}>
          <Styled.Button onClick={() => proceedFeedback(el)}>
            {el[0].toUpperCase() + el.slice(1)}
          </Styled.Button>
        </Styled.Item>
      ))}
    </Styled.List>
  );
};
