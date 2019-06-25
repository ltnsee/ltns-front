import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/note.css';
import { connect } from 'react-redux';

export class NotePage extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }
    
    render() {
        console.log('login');
        return (
            <div className="login-page-warp">
                <div className="login-form">
                    <div className="login-title">帐号密码登录</div>
                    <div className="user-account">
                        <input type="text" className="user-account" placeholder="请输入账号" />
                    </div> 
                    <div className="user-password">
                        <input type="password" className="user-password" placeholder="请输入密码" />
                    </div>
                    <div className="login-submit">
                        <input type="button" value="登录"/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NotePage);
