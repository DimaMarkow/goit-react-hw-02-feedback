import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Feedback/feedback.module.css';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <p className={css.text}>Good: {good}</p>
        <p className={css.text}>Neutral: {neutral}</p>
        <p className={css.text}>Bad: {bad}</p>
        <p className={css.text}>Total: {total} </p>
        <p className={css.text}>Positive feedback: {positivePercentage} %</p>
      </>
    );
  }
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
