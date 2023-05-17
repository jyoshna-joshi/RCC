import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const AllUploads = React.lazy(() => import('./views/content/AllUploads'))
const PendingApprovals = React.lazy(() => import('./views/content/PendingApprovals'))
const SaveTempleteContent = React.lazy(() => import('./components/SaveTempleteContent'))
const AllTemplates = React.lazy(() => import('./views/templates/AllTemplates'))
const Template = React.lazy(() => import('./views/templates/Template'))
const ViewAll = React.lazy(() => import('./components/ViewAllContent'))
const ApproveContent = React.lazy(() => import('./components/AdminApproval'))
const ApproveReject = React.lazy(() => import('./components/ApproveReject') ) 

const routes = [
  { path: '/admin/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/admin/content/all', name: 'All Uploads', element: AllUploads },
  { path: '/admin/content/pending', name: 'Pending Approvals', element: PendingApprovals },  
  { path: '/admin/content/upload', name: 'Upload Content', element: SaveTempleteContent },
  { path: '/admin/content/approve', name: 'Approve Content', element: ApproveContent },
  { path: '/admin/content/list-by-creator*', name: 'Public Content', element: AllUploads},
  { path: '/admin/template/all', name: "All Templates", element: AllTemplates},
  { path: '/admin/template/new', name: "New Template", element: Template},
  { path: '/admin/template/edit', name: "New Template", element: Template},
  { path: '/admin/template/view', name: "New Template", element: Template},
  { path: '/admin/approve', name: "Approve Reject", element: ApproveReject}   


]

export default routes
