import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AllUploads = React.lazy(() => import('./views/content/AllUploads'))
const PendingApprovals = React.lazy(() => import('./views/content/PendingApprovals'))
const SaveTempleteContent = React.lazy(() => import('./components/SaveTempleteContent'))
const AllTemplates = React.lazy(() => import('./views/templates/AllTemplates'))
const Template = React.lazy(() => import('./views/templates/Template'))
const ViewAll = React.lazy(() => import('./components/ViewAllContent'))

const routes = [
  { path: '/', name: 'Dashboard', element: Dashboard },
  { path: '/admin/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/content/all', name: 'All Uploads', element: AllUploads },
  { path: '/content/pending', name: 'Pending Approvals', element: PendingApprovals },
  { path: '/content/upload', name: 'Upload Content', element: SaveTempleteContent },
  { path: '/content/list-by-creator*', name: 'Public Content', element: AllUploads },
  { path: '/template/all', name: "All Templates", element: AllTemplates },
  { path: '/template/new', name: "New Template", element: Template },
  { path: '/template/edit', name: "New Template", element: Template },
  { path: '/template/view', name: "New Template", element: Template }


]

export default routes
