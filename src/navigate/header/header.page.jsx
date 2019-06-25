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
                <Link to={urlHelper.getPath('/')}>
                    <div className="logo fl">
                        <div className="logo-imager fl">
                            <img src={require('../../layout/picture/eason.png')} alt=""/>
                        </div>
                        <div className="logo-title">信心花舍</div>
                    </div>
                </Link>
                <ul className="header-right-nav fr">
                    <li className="notice-news fl">
                        <i className="fa fa-lg fa-bell-o"/>
                    </li>
                    <li className="user-info fl">
                        <Link 
                            to={urlHelper.getPath('/login')}
                            className="user-login"
                        >
                            登录
                        </Link>
                        /
                        <Link 
                            to={urlHelper.getPath('/register')}
                            className="user-register"
                        >
                            注册
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
