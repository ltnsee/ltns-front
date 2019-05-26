import { Menus } from './menu';
import { urlHelper } from '../../app/helper/url.helper';

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
                    // TODO 为以后过滤用
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

    setMenus(menus) {
        this.menus = menus;
    }

    init() {
        debugger;
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
                    m.link = urlHelper.getPath(m.link);
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
    }
}
