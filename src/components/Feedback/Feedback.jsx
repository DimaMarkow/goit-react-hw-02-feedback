import React from 'react';
import PropTypes from 'prop-types';
import css from './feedback.module.css';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class Feedback extends React.Component {
  state = { ...INITIAL_STATE };

  handleClick = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
    console.log(e.target.name);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state.good;
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.wrapper}>
        <h2 className={css.title}>Please leave feedback</h2>
        <div className={css.buttonWrapper}>
          <button
            className={css.btn}
            type="button"
            name="good"
            onClick={this.handleClick}
          >
            Good
          </button>
          <button
            className={css.btn}
            type="button"
            name="neutral"
            onClick={this.handleClick}
          >
            Neutral
          </button>
          <button
            className={css.btn}
            type="button"
            name="bad"
            onClick={this.handleClick}
          >
            Bad
          </button>
        </div>
        <h2 className={css.title}>Statistics</h2>
        <p className={css.text}>Good: {good}</p>
        <p className={css.text}>Neutral: {neutral}</p>
        <p className={css.text}>Bad: {bad}</p>
        <p className={css.text}>Total: {this.countTotalFeedback()}</p>
        <p className={css.text}>
          Positive feedback: {this.countPositiveFeedbackPercentage()} %
        </p>
      </div>
    );
  }
}

export default Feedback;
