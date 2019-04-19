import { helper } from './Helper';
import { loginUserState } from 'app/state/login.user.state';
import { IMenu } from './MenuState';
import { observable, action } from 'mobx';
import { eventHelper } from 'app/helper/event.helper';
import { Menus } from './menu';
import { roleHelper } from 'app/helper/role.helper';
import { urlHelper } from 'app/helper/url.helper';
import { ls } from 'app/locale/locale.state';

export class MenuState {
    menus = {
        collapseMenu: -1,
        subCollapseMenu: -1
    };
    baseMenus = [];
    constructor() {
        let menus = Menus.slice();
        this.baseMenus = menus.filter(m => {
            // TODO 为以后过滤用
            return true;
        });
        this.baseMenus.map(m => {
            if (m.subMenus) {
                m.subMenus = m.subMenus.filter(s => {
                    return true;
                });
            }
        });
        urlHelper.history.listen((r, v) => {
            this.init();
        });
        setTimeout(() => {
            this.init();
        }, 100);
    }

    @action setMenus(menus) {
        this.menus = menus;
    }

    @action init() {
        let navs = [];
        this.baseMenus.map((menu, index) => {
            menu.link = urlHelper.getPath(menu.link);
            if (window.location.pathname.indexOf(menu.link) === 0) {
                if (navs.map(n => n.link).indexOf(menu.link) === -1) {
                    navs.splice(navs.map(n => n.link).indexOf(menu.link), 1);
                }
                navs.push(menu);
                this.setMenus({
                    collapseMenu: index,
                    subCollapseMenu: -1
                });
            }
            if (menu.subMenus) {
                menu.subMenus.map((m, i) => {
                    m.link = helper.getPath(m.link);
                    if (window.location.pathname.indexOf(m.link) === 0) {
                        if (navs.map(n => n.link).indexOf(m.link) === -1) {
                            navs.splice(navs.map(n => n.link).indexOf(m.link), 1);
                        }
                        navs.push(m);
                        this.setMenus({
                            collapseMenu: index,
                            subCollapseMenu: i
                        });
                    }
                });
            }
        });
        if (navs) {
            eventHelper.dispatch(eventHelper.event.SetNav, navs);
        }
        if ($) {
            $('.scroll-sidebar').slimScroll({
                position: 'left'
            , size: '5px'
            , height: '100%'
            , color: '#dcdcdc'
            });
            $('.scroll-sidebar, .slimScrollDiv')
                .css('overflow-x', 'visible').parent().css('overflow', 'visible');
        }
    }
}
