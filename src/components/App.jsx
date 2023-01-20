import React, { Component } from 'react';
import FeedbackOptions from './Counter/FeedbackOptions/FeedbackOptions';
import Statistics from './Counter/Statistics/Statistics';
import Notification from './Counter/Notification/Notification';
import Section from './Counter/Section/Section';
import css from './App.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnsClick = stat => {
    this.setState(prevState => {
      return {
        [stat]: prevState[stat] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const feedbackStats = Object.values(this.state);

    return feedbackStats.reduce((totalFeedback, feedbackValue) => {
      return (totalFeedback += feedbackValue);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onBtnsClick={this.onBtnsClick} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
