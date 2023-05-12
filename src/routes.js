import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AllUploads = React.lazy(() => import('./views/content/AllUploads'))
const PendingApprovals = React.lazy(() => import('./views/content/PendingApprovals'))
const UploadContent = React.lazy(() => import('./components/SaveTempleteContent'))
const ApproveContent = React.lazy(() => import('./components/AdminApproval'))
const AllTemplates = React.lazy(() => import('./views/templates/AllTemplates'))
const NewTemplate = React.lazy(() => import('./views/templates/Template'))


const routes = [
  { path: '/', name: 'Dashboard', element: Dashboard },
  { path: '/admin/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/content/all', name: 'All Uploads', element: AllUploads },
  { path: '/content/pending', name: 'Pending Approvals', element: PendingApprovals },
  { path: '/content/upload', name: 'Upload Content', element: UploadContent },
  { path: '/content/approve', name: 'Approve Content', element: ApproveContent },
  { path: '/content/list-by-creator*', name: 'Public Content', element: AllUploads},
  { path: '/template/all', name: "All Templates", element: AllTemplates},
  { path: '/template/new', name: "New Template", element: NewTemplate},
  { path: '/template/edit', name: "New Template", element: NewTemplate},
  { path: '/template/view', name: "New Template", element: NewTemplate}


]

export default routes
