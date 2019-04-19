import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Header extends Component {
    // static propTypes = {
    //     props: PropTypes
    // }

    render() {
        return (
            <div className="header-page-wrapper">
                
            </div>
        )
    }
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
