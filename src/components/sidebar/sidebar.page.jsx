import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as classnames from 'classnames';
import { Link } from 'react-router-dom';

export class Sidebar extends Component {
    // static propTypes = {
    //     props: PropTypes
    // }

    render() {
        return (
            <aside className="sidebar-page-wrapper">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            {[1,2,3,4,5,6,7,8,9,0].map((menu, index) => {
                                return (
                                    <li
                                        className={classnames({
                                            'active': index === 0
                                        })}
                                        key={index}
                                    >
                                        {menu !== '' && (
                                            <Link
                                                className={classnames({
                                                    'waves-effect': true,
                                                    'waves-dark': true,
                                                    'has-arrow': true
                                                })}
                                                to={menu + ''}
                                                aria-expanded="false"
                                            >
                                                <span className="hide-menu menu-item">
                                                    {menu}
                                                </span>
                                                <i className={'fa fa-lg fa-angle-down'} />
                                                {/* <i className={'fa fa-lg fa-angle-right'} /> */}
                                            </Link>
                                        )}
                                        {/* <ul
                                            className={classnames({
                                                collapse: menu.collapse === false ? false : true,
                                                in: index === menus
                                            })}
                                        >
                                            {menu.subMenus.map((m, i) => {
                                                return (
                                                    <li
                                                        className={
                                                            classnames({
                                                                'active': index === menus.collapseMenu &&
                                                                    i === menus.subCollapseMenu
                                                            })
                                                        }
                                                        key={i}
                                                    >
                                                        <Link
                                                            to={m.link}
                                                            className={
                                                                classnames({
                                                                    'active': index === menus.collapseMenu &&
                                                                        i === menus.subCollapseMenu
                                                                })
                                                            }
                                                        >
                                                            {ls.fm(m.name, m.resourceType)}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul> */}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </aside>
        )
    }
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
