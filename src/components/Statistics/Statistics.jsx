import style from './Statistics.module.scss';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  let mood;
  if (positivePercentage < 20) {
    mood = '😢';
  } else if (positivePercentage >= 20 && positivePercentage < 40) {
    mood = '🙁';
  } else if (positivePercentage >= 40 && positivePercentage < 60) {
    mood = '😐';
  } else if (positivePercentage >= 60 && positivePercentage < 80) {
    mood = '😀';
  } else if (positivePercentage >= 80 && positivePercentage < 101) {
    mood = '🤗';
  } else mood = '';

  return (
    <div>
      <ul className={style.statisticsList}>
        <li className={style.statisticsItem}>good: {good}</li>
        <li className={style.statisticsItem}>neutral: {neutral}</li>
        <li className={style.statisticsItem}>bad: {bad}</li>
        <li className={style.statisticsItem}>total: {total}</li>
        <li className={style.statisticsItem}>
          Positive feedback: {positivePercentage}% {mood}
        </li>
      </ul>
    </div>
  );
};

Statistics.prototypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
