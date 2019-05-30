import React, { Component } from 'react';
import './layout/styles/app.css';
import 'font-awesome/css/font-awesome.css';
import { Router } from 'react-router';
import { Header } from './navigate/header/header.page';
import Sidebar from './navigate/sidebar/sidebar.page';
import { HomeRouter } from './home/home.router';
import { Css3Router } from './css3/css3.router';
import { urlHelper } from './app/helper/url.helper';

export class App extends Component {
    render() {
        return (
            <Router history={urlHelper.history}>
                <div className="app">
                    <Header />
                    <Sidebar />
                    <div className="page-wrapper" style={{ minHeight: window.innerHeight - 70 - 40 }}>
                        <div className="container-fluid">
                            <HomeRouter />
                            <Css3Router />
                        </div>
                        <footer className="footer">© 2016-2019 {'学习案例'}</footer>
                    </div>
                </div>
            </Router>
        );
    }
};