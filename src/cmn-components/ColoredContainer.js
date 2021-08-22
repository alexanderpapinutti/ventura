import PropTypes from 'prop-types'

export function ColoredContainer({children}) {
    return<div className={'colored-container'}>{children}</div>
}

ColoredContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ])
}