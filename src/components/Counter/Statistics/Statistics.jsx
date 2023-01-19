import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul>
      <li>
        <p>
          Good:<span className={css.statsValue}>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral:<span className={css.statsValue}>{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad:<span className={css.statsValue}>{bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total:<span className={css.statsValue}>{total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback:
          <span className={css.statsValue}>{percentage}%</span>
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};

export default Statistics;
