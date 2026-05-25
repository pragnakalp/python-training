import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/python-training/',
    component: ComponentCreator('/python-training/', '5c5'),
    routes: [
      {
        path: '/python-training/',
        component: ComponentCreator('/python-training/', '6a3'),
        routes: [
          {
            path: '/python-training/',
            component: ComponentCreator('/python-training/', 'a47'),
            routes: [
              {
                path: '/python-training/OOPS',
                component: ComponentCreator('/python-training/OOPS', 'e55'),
                exact: true,
                sidebar: "Python Training"
              },
              {
                path: '/python-training/OOPS_Tasks',
                component: ComponentCreator('/python-training/OOPS_Tasks', '945'),
                exact: true,
                sidebar: "Python Training"
              },
              {
                path: '/python-training/Resources',
                component: ComponentCreator('/python-training/Resources', '32d'),
                exact: true,
                sidebar: "Python Training"
              },
              {
                path: '/python-training/Tasks',
                component: ComponentCreator('/python-training/Tasks', '98f'),
                exact: true,
                sidebar: "Python Training"
              },
              {
                path: '/python-training/',
                component: ComponentCreator('/python-training/', '7fb'),
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
