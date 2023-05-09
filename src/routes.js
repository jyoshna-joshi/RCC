import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AllUploads = React.lazy(() => import('./views/content/AllUploads'))
const PendingApprovals = React.lazy(() => import('./views/content/PendingApprovals'))
const UploadContent = React.lazy(() => import('./components/UploadTemplateForm'))
const ApproveContent = React.lazy(() => import('./components/AdminApproval'))

const routes = [
  { path: '/', name: 'Dashboard1', element: Dashboard },
  { path: '/admin/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/content/all', name: 'All Uploads', element: AllUploads },
  { path: '/content/pending', name: 'Pending Approvals', element: PendingApprovals },
  { path: '/content/upload', name: 'Upload Content', element: UploadContent },
  { path: '/content/approve', name: 'Approve Content', element: ApproveContent },
]

export default routes
