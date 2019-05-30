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

export const initMenus = () => ({ type: 'INIT_MENUS' });

export const historyListen = () => ({ type: 'HISTORY_LISTEN' });

export const filterBaseMenus = (newState) => {
    let menus = Menus.slice();
    newState.baseMenus = menus.filter(m => {
        // TODO 为以后过滤用
        return true;
    });
    newState.baseMenus = newState.baseMenus.map(m => {
        if (m.subMenus) {
            m.subMenus = m.subMenus.filter(s => {
                // TODO 为以后过滤用
                return true;
            });
        }
        return m;
    });
    newState = resetMenus(newState);
    return newState;
}

export const resetMenus = (newState) => {
    let navs = [];
    newState.baseMenus.forEach((menu, index) => {
        menu.link = urlHelper.getPath(menu.link);
        if (window.location.pathname.indexOf(menu.link) === 0) {
            if (navs.map(n => n.link).indexOf(menu.link) === -1) {
                navs.splice(navs.map(n => n.link).indexOf(menu.link), 1);
            }
            navs.push(menu);
            newState.menus = {
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
                    newState.menus = {
                        collapseMenu: index,
                        subCollapseMenu: i
                    };
                    return false;
                }
            });
        }
    });
    return newState;
}

export const menuReducer = (state = initState, action) => {
    let newState = {...state}
    switch (action.type) {
        case 'INIT_MENUS':
            return filterBaseMenus(newState);
        case 'HISTORY_LISTEN':
            return resetMenus(newState);
        default:
            return newState;
    }
};