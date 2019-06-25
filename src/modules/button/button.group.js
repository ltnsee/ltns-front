import * as React from 'react';
import PropTypes from 'prop-types';
import * as cn from 'classnames';

export default class ButtonGroup extends React.Component {
    static defaultProps = {
        type: 'default'
    }

    static propTypes = {
        type: PropTypes.string,// ['primary', 'dashed', 'danger', 'link']
        
    }
    
    constructor(props) {
        super(props);

        console.log('buttonProps', props);
    }

    render() {
        const {
            type,
            children,
        } = this.props;
        return (
            <button
                className={cn({
                    [`btn-${type}`]: true
                })}
            >
                {children}
            </button>
        )
    }
}