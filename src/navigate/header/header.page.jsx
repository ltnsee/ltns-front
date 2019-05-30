import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { urlHelper } from '../../app/helper/url.helper';

export class Header extends Component {
    // static propTypes = {
    //     props: PropTypes
    // }

    render() {
        return (
            <div className="header-page-wrapper clearfix">
                <div className="logo fl">Accumulation</div>
                <ul className="header-right-nav fr">
                    <li className="notice-news fl">
                        <i className="fa fa-lg fa-bell-o"/>
                    </li>
                    <li className="user-info fl">
                        <Link 
                            to={urlHelper.getPath('/login')}
                            className="user-name"
                        >
                            登录/注册
                        </Link>
                        <span className="user-head">
                            <i className="fa fa-lg fa-user-circle-o"/>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
