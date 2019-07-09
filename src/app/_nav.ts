interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: 'Components'
  },
  // {
  //   name: 'IsonAccountLocation',
  //   url: '/IsonAccountLocation',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Forms',
  //       url: '/IsonAccountLocation/forms',
  //       icon: 'icon-puzzle'
  //     },
  //   ]
  // },
  {
    name: 'Location',
    url: '/Location',
    icon: 'icon-puzzle',
  },
  {
    name: 'Contact User',
    url: '/ContactUser',
    icon: 'icon-people',
  },
  {
    name: 'Ticket',
    url: '/Ticket',
    icon: 'icon-puzzle',
  },
  {
    name: 'Asset',
    url: '/Asset',
    icon: 'icon-puzzle',
  },
  {
    name: 'Up Time',
    url: '/UpTime',
    icon: 'icon-clock',
  },
  {
    divider: true
  },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // }
];
