// 设置state初始值
const initState = {
    name: '沉淀'
}

export const initBaseMenus = (payload) => ({
    type: 'INIT_BASE_MENUS',
    payload,
});

export const historyListen = (payload) => ({
    type: 'HISTORY_LISTEN',
    payload,
});

export const headerReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INIT_BASE_MENUS':
            return state;
        default:
            return state;
    }
};