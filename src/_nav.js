import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilLibrary,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

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
        to: '/content/pending',
        badge: {
          color: 'warning',
          text: '3',
        },
      },
      {
        component: CNavItem,
        name: 'Upload Content',
        to: '/content/upload',
      },
      {
        component: CNavItem,
        name: 'Approve/Reject',
        to: '/content/approve',
      },
    ]
  },
]

export default _nav
