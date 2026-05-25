import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '772'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '307'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'bab'),
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
                component: ComponentCreator('/', '34e'),
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
