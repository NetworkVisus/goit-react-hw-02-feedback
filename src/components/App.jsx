import { FeedbackButtons } from './FeedbackButtons/FeedbackButtons';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
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
        <h1>Please leave feedback </h1>
        <FeedbackButtons
          proceedFeedback={this.proceedFeedback}
        ></FeedbackButtons>
        <h2>Statistics</h2>
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positive={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback right now😢"></Notification>
        )}
      </>
    );
  }
}
