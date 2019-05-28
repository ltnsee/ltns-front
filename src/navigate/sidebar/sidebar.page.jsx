import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as classnames from 'classnames';
import { Link } from 'react-router-dom';
import { MenuState } from './menu.state';
import { bindActionCreators } from 'redux';
import { initBaseMenus, historyListen } from './menu.reducer';
import { urlHelper } from '../../app/helper/url.helper';

export class Sidebar extends Component {
    static propTypes = {
        menuReducer: PropTypes.shape({ }).isRequired,
        initBaseMenus: PropTypes.func.isRequired,
        historyListen: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        console.log('props', props);
        this.menuState = new MenuState();
        // this.props.initBaseMenus();
        urlHelper.history.listen((r, v) => {   
            this.props.historyListen();
        });
    }

    render() {
        let menus = this.menuState.menus;
        return (
            <aside className="sidebar-page-wrapper">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            {this.menuState.baseMenus.map((menu, index) => {
                                return (
                                    <li
                                        className={classnames({
                                            'active': index === menus.collapseMenu
                                        })}
                                        key={index}
                                    >
                                        {menu !== '' && (
                                            <Link to={urlHelper.getPath(menu.link)} className="menu-item">
                                                <i className={`fa fa-lg fa-${menu.icon}`} />
                                                <span className="">{menu.name}</span>
                                                {menu.subMenus && index === menus.collapseMenu ? (
                                                    <i className="fa fa-lg fa-angle-down" />
                                                ) : (
                                                    <i className="fa fa-lg fa-angle-right" />
                                                )}
                                            </Link>
                                        )}
                                        {menu.subMenus && <ul
                                            className={classnames({
                                                'sub-menus': true,
                                                show: index === menus.collapseMenu
                                            })}
                                        >
                                            {menu.subMenus.map((m, i) => {
                                                return (
                                                    <li
                                                        className={
                                                            classnames({
                                                                'active': index === menus.collapseMenu && i === menus.subCollapseMenu
                                                            })
                                                        }
                                                        key={i}
                                                    >
                                                        <Link to={urlHelper.getPath(m.link)} className="sub-menu-item">
                                                            <span>{m.name}</span>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
};

const mapStateToProps = state => ({
    menuReducer: state.menuReducer
});

const mapDispatchToProps = {
    initBaseMenus, 
    historyListen
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
