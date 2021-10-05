import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function getColor(percentage) {
  if (percentage > 90) {
    return '#20c997';
  }

  if (percentage > 70) {
    return 'green';
  }

  if (percentage > 45) {
    return 'orange';
  }

  return 'red';
}

export function ProgressBar({ percentage }) {
  return (
    <div>
      <VisibilitySensor>
        {({ isVisible }) => {
          const value = isVisible ? percentage : 0;
          return (
            <CircularProgressbar
              styles={buildStyles({
                pathColor: getColor(percentage),
                trailColor: 'transparent',
                textColor: getColor(percentage),
              })}
              value={value}
              text={`${value}%`}
            />
          );
        }}
      </VisibilitySensor>
    </div>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number,
};
