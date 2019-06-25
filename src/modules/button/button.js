import * as React from 'react';
import PropTypes from 'prop-types';
import * as cn from 'classnames';
import './style/button.css';

export default class Button extends React.Component {
    static defaultProps = {
        size: 'default',
        disabled: false,
        htmlType: 'button'
    }

    static propTypes = {
        type: PropTypes.oneOf(['primary', 'dashed', 'danger', 'link']),
        size: PropTypes.oneOf(['small', 'default', 'large']),
        disabled: PropTypes.bool,
        shape: PropTypes.oneOf(['circle', 'round']),
        icon: PropTypes.string,
        loading: PropTypes.bool,
        htmlType: PropTypes.oneOf(['submit', 'reset', 'button']),
        block: PropTypes.bool,
        onClick: PropTypes.func
    }

    render() {
        const {
            type,
            size,
            disabled,
            shape,
            icon,
            loading,
            htmlType,
            block,
            onClick,
            children,
        } = this.props;
        return (
            <button
                type={htmlType}
                className={cn({
                    'ltns-btn': true,
                    [`ltns-btn-${type}`]: type,
                    [`ltns-btn-${size}`]: true,
                    [`ltns-btn-${shape}`]: shape,
                    [`ltns-btn-block`]: block
                })}
                disabled={disabled}
                onClick={onClick}
            >
                {loading ? (
                    <i className={`fa fa-spin fa-refresh`} />
                ) : (
                    icon && <i className={`fa fa-${icon}`} />
                )}
                {children && <span>{children}</span>}
            </button>
        )
    }
}