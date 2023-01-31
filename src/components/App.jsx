import { useState } from 'react';
import FeedbackOptions from './Counter/FeedbackOptions/FeedbackOptions';
import Statistics from './Counter/Statistics/Statistics';
import Notification from './Counter/Notification/Notification';
import Section from './Counter/Section/Section';
import css from './App.module.css';

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(votes);

  const onBtnsClick = voteType => {
    setVotes(prevState => {
      return {
        ...prevState,
        [voteType]: prevState[voteType] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const totalFeedback = Object.values(votes).reduce(
      (acc, vote) => acc + vote,
      0
    );
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((votes.good / countTotalFeedback()) * 100);
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onBtnsClick={onBtnsClick} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={votes.good}
            neutral={votes.neutral}
            bad={votes.bad}
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
