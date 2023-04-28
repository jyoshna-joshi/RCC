import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AllUploads = React.lazy(() => import('./views/content/AllUploads'))

const routes = [
  { path: '/', name: 'Dashboard1', element: Dashboard },
  { path: '/admin/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/content/all', name: 'All Uploads', element: AllUploads },
]

export default routes
