import { FeedbackButtons } from './FeedbackButtons/FeedbackButtons';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  proceedFeedback = feedbackType => {
    this.setState(prev => {
      return { [feedbackType]: prev[feedbackType] + 1 };
    });
  };
  countTotalFeedback = event => {
    return Object.values(this.state).reduce(
      (sum, currValue) => (sum += currValue),
      0
    );
  };

  countPositiveFeedbackPercentage = event => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackButtons
              options={Object.keys(this.state)}
              proceedFeedback={this.proceedFeedback}
            />
          }
        />

        {this.countTotalFeedback() > 0 ? (
          <Section
            title="Statistics"
            children={
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positive={this.countPositiveFeedbackPercentage()}
              ></Statistics>
            }
          />
        ) : (
          <Notification message="There is no feedback right now😢" />
        )}
      </>
    );
  }
}
