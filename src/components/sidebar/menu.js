/**
 * 配置菜单的列表
 */
export const Menus = [
    {
        link: '/',
        name: '首页',
        icon: 'home'
    },
    {
        link: '/css3',
        name: 'CSS3',
        icon: 'css3',
        subMenus: [
            {
                link: '/css3/3d',
                name: '3D'
            },
            {
                link: '/css3/background',
                name: '背景'
            }
        ]
    }
];
