import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '0ec'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '551'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b4d'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'b8e'),
            routes: [
              {
                path: '/contribute',
                component: ComponentCreator('/contribute', '372'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/interfaces',
                component: ComponentCreator('/interfaces', '92f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/resources',
                component: ComponentCreator('/resources', '70f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '0d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
