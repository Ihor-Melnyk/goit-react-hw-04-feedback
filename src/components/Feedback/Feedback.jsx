import style from './Feedback.module.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(option => {
      return (
        <li className={style.elem} key={option}>
          <button
            className={style.btn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      );
    })}
  </ul>
);

FeedbackOptions.prototypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
