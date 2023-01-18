import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { arrayOf } from 'prop-types';

const FeedbackOptions = ({ options, onBtnsClick }) => {
  return (
    <ul className={css.counterBtnsList}>
      {options.map((optionName, idx) => {
        return (
          <li key={idx}>
            <button
              type="button"
              className={css.counterBtn}
              onClick={() => {
                onBtnsClick(optionName);
              }}
            >
              {optionName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string),
  onBtnsClick: PropTypes.func,
};

export default FeedbackOptions;
