import React from 'react';
import CIcon from '@coreui/icons-react';
import {
  cilLibrary,
  cilSpeedometer,
  cilFlipToFront
} from '@coreui/icons';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react';

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Content Management',
    to: '/admin/content',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Content',
        to: '/admin/content/all',
      },
      {
        component: CNavItem,
        name: 'Pending Approvals',
        to: '/admin/content/pending'
      },
      {
        component: CNavItem,
        name: 'Upload Content',
        to: '/admin/content/upload',
      },
    ]
  },
  {
    component: CNavGroup,
    name: 'Template Management',
    to: '/admin/template',
    icon: <CIcon icon={cilFlipToFront} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Templates',
        to: '/admin/template/all',
      },
      {
        component: CNavItem,
        name: 'New Template',
        to: '/admin/template/new',
      }
    ]
  },
]

export default _nav
