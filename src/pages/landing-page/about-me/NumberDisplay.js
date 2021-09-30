import PropTypes from 'prop-types';

export function NumberDisplay({ label, years }) {
  return (
    <div className={'d-flex align-items-center pt-5'}>
      <h4 className={'font-weight-light'}>{label}</h4>
      <h3 className={'font-weight-bold text-nowrap px-5'}>{years}</h3>
    </div>
  );
}

NumberDisplay.propTypes = {
  label: PropTypes.string,
  years: PropTypes.string,
};
