/**
 * 配置菜单的列表
 */
export const Menus = [
    {
        link: '/home',
        name: 'home',
        icon: 'mdi-gauge',
    },
    {
        link: '/approval/standard',
        name: 'wait.approval.meeting',
        icon: 'mdi-pencil-box-outline',
        subMenus: [
            {
                link: '/approval/standard',
                name: 'approval.standard'
            },
            {
                link: '/approval/customer',
                name: 'approval.customer'
            }
        ]
    }
];
