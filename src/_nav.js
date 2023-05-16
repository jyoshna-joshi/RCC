import React from 'react';
import CIcon from '@coreui/icons-react';
import {
  cilLibrary,
  cilSpeedometer,
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
    to: '/content',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Content',
        to: '/content/all',
      },
      {
        component: CNavItem,
        name: 'Pending Approvals',
        to: '/content/pending'
      },
      {
        component: CNavItem,
        name: 'Upload Content',
        to: '/content/upload',
      },
          
     
     
     
    ]
  },
  {
    component: CNavGroup,
    name: 'Template Management',
    to: '/template',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Templates',
        to: '/template/all',
      },
      {
        component: CNavItem,
        name: 'New Template',
        to: '/template/new',
      }
    ]
  },
]

export default _nav
