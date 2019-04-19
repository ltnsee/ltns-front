
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './layout/styles/app.css';
import 'font-awesome/css/font-awesome.css';
import { connect } from 'react-redux';
import { Router, Route } from 'react-router';
import { Header } from './components/header/header.page';
import { Sidebar } from './components/sidebar/sidebar.page';
import { BasicsRouter } from './basics/basics.router';
import { urlHelper } from './app/helper/url.helper';

export class App extends Component {
    // static propTypes = {
    //     props: PropTypes
    // }

    render() {
        console.log('urlHelper.history', urlHelper.history);
        return (
            <Router history={urlHelper.history}>
                <div className="app">
                    <Route
                        path={urlHelper.getPath('/')}
                        render={props => (
                            <div>
                                <Header />
                                <Sidebar />
                                <div className="page-wrapper" style={{ minHeight: window.innerHeight - 70 - 40 }}>
                                    <div className="container-fluid">
                                        <BasicsRouter />
                                    </div>
                                    <footer className="footer">© 2016-2019 {'学习案例'}</footer>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </Router>
        )
    }
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);