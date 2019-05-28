import { Menus } from './menu';
import { urlHelper } from '../../app/helper/url.helper';

// 设置state初始值
const initState = {
    menus: {
        collapseMenu: -1,
        subCollapseMenu: -1
    },
    baseMenus: []
}

export const initBaseMenus = (payload) => ({
    type: 'INIT_BASE_MENUS',
    payload,
});

export const historyListen = (payload) => ({
    type: 'HISTORY_LISTEN',
    payload,
});

export const menuReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INIT_BASE_MENUS':
            let menus = Menus.slice();
            state.baseMenus = menus.filter(m => {
                // TODO 为以后过滤用
                return true;
            });
            state.baseMenus = state.baseMenus.map(m => {
                if (m.subMenus) {
                    m.subMenus = m.subMenus.filter(s => {
                        // TODO 为以后过滤用
                        return true;
                    });
                }
                return m;
            });
            return state;
        case 'HISTORY_LISTEN':
            let navs = [];
            state.baseMenus.forEach((menu, index) => {
                menu.link = urlHelper.getPath(menu.link);
                if (window.location.pathname.indexOf(menu.link) === 0) {
                    if (navs.map(n => n.link).indexOf(menu.link) === -1) {
                        navs.splice(navs.map(n => n.link).indexOf(menu.link), 1);
                    }
                    navs.push(menu);
                    state.menus = {
                        collapseMenu: index,
                        subCollapseMenu: -1
                    };
                }
                if (menu.subMenus) {
                    menu.subMenus.forEach((m, i) => {
                        m.link = urlHelper.getPath(m.link);
                        if (window.location.pathname.indexOf(m.link) === 0) {
                            if (navs.map(n => n.link).indexOf(m.link) === -1) {
                                navs.splice(navs.map(n => n.link).indexOf(m.link), 1);
                            }
                            navs.push(m);
                            state.menus = {
                                collapseMenu: index,
                                subCollapseMenu: i
                            };
                            return false;
                        }
                    });
                }
            })
            return state;
        default:
            return state;
    }
};