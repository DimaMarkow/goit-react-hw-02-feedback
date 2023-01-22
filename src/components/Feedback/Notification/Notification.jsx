import React from 'react';
import css from 'components/Feedback/feedback.module.css';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  render() {
    return <p className={css.text}>{this.props.message}</p>;
  }
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
