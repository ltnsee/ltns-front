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
        link: '/css3/square',
        name: 'CSS3',
        icon: 'css3',
        subMenus: [
            {
                link: '/css3/square',
                name: '3D长方形'
            },
            {
                link: '/css3/rotate',
                name: '3D + 旋转动画'
            },
            {
                link: '/css3/animate',
                name: '动画效果'
            },
            {
                link: '/css3/accordion',
                name: '手风琴'
            }
        ]
    }
];
