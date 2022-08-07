// import { Component } from 'react';
import style from './App.module.scss';
import Section from './Section';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGoodState] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackButtonName = { good, neutral, bad };
  const options = () => Object.keys(feedbackButtonName);

  const handleButtonClick = options => {
    switch (options) {
      case 'good':
        setGoodState(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return ((good / total) * 100).toFixed(0);
  };

  return (
    <div className={style.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options()}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
