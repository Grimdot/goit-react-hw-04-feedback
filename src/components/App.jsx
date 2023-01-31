import { useState } from 'react';
import FeedbackOptions from './Counter/FeedbackOptions/FeedbackOptions';
import Statistics from './Counter/Statistics/Statistics';
import Notification from './Counter/Notification/Notification';
import Section from './Counter/Section/Section';
import css from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onBtnsClick = stat => {
    switch (stat) {
      case 'good':
        setGood(prevState => {
          return prevState + 1;
        });
        break;
      case 'neutral':
        setNeutral(prevState => {
          return prevState + 1;
        });
        break;
      case 'bad':
        setBad(prevState => {
          return prevState + 1;
        });
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onBtnsClick={onBtnsClick} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
