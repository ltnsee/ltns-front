import React, { Component } from 'react';
import './layout/styles/app.css';
import 'font-awesome/css/font-awesome.css';
import { Router } from 'react-router';
import { Header } from './navigate/header/header.page';
import Sidebar from './navigate/sidebar/sidebar.page';
import { HomeRouter } from './home/home.router';
import { Css3Router } from './css3/css3.router';
import { UserRouter } from './user/user.router';
import { NoteRouter } from './note/note.router';
import { urlHelper } from './app/helper/url.helper';

export class App extends Component {
    render() {
        return (
            <Router history={urlHelper.history}>
                <div className="app">
                    <Header />
                    <Sidebar />
                    <div className="page-wrapper" style={{ minHeight: window.innerHeight - 60 }}>
                        <div className="container-fluid">
                            <HomeRouter />
                            <UserRouter />
                            <Css3Router />
                            <NoteRouter />
                        </div>
                        {/* <footer className="footer">© 2016-2019 {'学习案例'}</footer> */}
                    </div>
                </div>
            </Router>
        );
    }
};