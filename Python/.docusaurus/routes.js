import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b60'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '8d7'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'e2f'),
            routes: [
              {
                path: '/OOPS',
                component: ComponentCreator('/OOPS', '716'),
                exact: true,
                sidebar: "Python Training"
              },
              {
                path: '/OOPS_Tasks',
                component: ComponentCreator('/OOPS_Tasks', 'f41'),
                exact: true,
                sidebar: "Python Training"
              },
              {
                path: '/Resources',
                component: ComponentCreator('/Resources', '1fc'),
                exact: true,
                sidebar: "Python Training"
              },
              {
                path: '/Tasks',
                component: ComponentCreator('/Tasks', 'fa7'),
                exact: true,
                sidebar: "Python Training"
              },
              {
                path: '/',
                component: ComponentCreator('/', '9c6'),
                exact: true,
                sidebar: "Python Training"
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
