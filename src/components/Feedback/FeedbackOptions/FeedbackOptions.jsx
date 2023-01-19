import React from 'react';
import PropTypes, { string } from 'prop-types';

import css from 'components/Feedback/feedback.module.css';

class FeedbackOptions extends React.Component {
  render() {
    const elements = this.props.options.map(element => (
      <p key={element}>
        <button
          className={css.btn}
          type="button"
          name={element}
          onClick={this.props.onLeaveFeedback}
        >
          {element}
        </button>
      </p>
    ));

    return <div className={css.buttonWrapper}>{elements}</div>;
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(string),
};
