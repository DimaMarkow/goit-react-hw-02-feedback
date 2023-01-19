import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Feedback/feedback.module.css';

class FeedbackOptions extends React.Component {
  render() {
    return (
      <>
        <div className={css.buttonWrapper}>
          <button
            className={css.btn}
            type="button"
            name="good"
            onClick={this.props.onLeaveFeedback}
          >
            Good
          </button>
          <button
            className={css.btn}
            type="button"
            name="neutral"
            onClick={this.props.onLeaveFeedback}
          >
            Neutral
          </button>
          <button
            className={css.btn}
            type="button"
            name="bad"
            onClick={this.props.onLeaveFeedback}
          >
            Bad
          </button>
        </div>
      </>
    );
  }
}

export default FeedbackOptions;
