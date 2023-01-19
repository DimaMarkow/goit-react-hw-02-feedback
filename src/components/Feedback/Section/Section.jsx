import PropTypes from 'prop-types';

import css from 'components/Feedback/feedback.module.css';

const Section = ({ children, title }) => {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
