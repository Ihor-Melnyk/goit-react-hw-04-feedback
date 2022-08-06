import { Component } from 'react';
import style from './App.module.scss';
// import Container from './Container';
import Section from './Section';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return ((good / total) * 100).toFixed(0);
  };

  options = () => Object.keys(this.state);

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={style.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options()}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
