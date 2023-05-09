import React from 'react'
import { useNavigate } from "react-router-dom";

import {
  CWidgetStatsF,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilLibrary,
  cilBellExclamation,
  cibCcMastercard,
  cilClock,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilExternalLink,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilLockLocked,
} from '@coreui/icons'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'

import avatar1 from '../../assets/images/avatars/1.jpg'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
  ]

  let navigate = useNavigate();

  function showDetails(source) {
    switch (source) {
      case 'all':
        navigate("/content/all");
        return;
      case 'pending':
        navigate("/content/pending");
        return;
      case 'user':
        navigate("/content/all?user=user");
        return;
      case 'admin':
        navigate("/content/all?user=admin");
        return;
      default:
        navigate('/admin/dashboard');
        return;
    };
  }

  return (
    <>
      <CRow>
        <CCol xs={12} sm={6} lg={3}>
          <div class="box" onClick={() => { showDetails('all'); }}>
            <CWidgetStatsF
              className="mb-3"
              icon={<CIcon width={24} icon={cilLibrary} size="xl" onClick={console.log('dd')} />}
              padding={false}
              title="All Content"
              value="25"
              color="primary"
            >
            </CWidgetStatsF>
          </div>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <div class="box" onClick={() => { showDetails("pending"); }}>
            <CWidgetStatsF
              className="mb-3"
              icon={<CIcon width={24} icon={cilBellExclamation} size="xl" />}
              padding={false}
              title="Pending Approvals"
              value="12"
              color="warning"
            />
          </div>
        </CCol>
        <CCol xs={12} sm={6} lg={3}>
          <div class="box" onClick={() => { showDetails("user"); }}>
            <CWidgetStatsF
              className="mb-3"
              icon={<CIcon width={24} icon={cilUser} size="xl" />}
              padding={false}
              title="User Content"
              value="15"
              color="success"
            />
          </div>
        </CCol>
        <CCol xs={12} sm={6} lg={3} >
          <div class="box" onClick={() => { showDetails("admin"); }}>
            <CWidgetStatsF
              className="mb-3"
              icon={<CIcon width={24} icon={cilUser} size="xl" />}
              padding={false}
              title="Admin Content"
              value="10"
              color="secondary"
            />
          </div>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={4}>
          <CCard className="mb-4">
            <CCardHeader>Content Uploads by Type</CCardHeader>
            <CCardBody>
              <CChartPie
                data={{
                  labels: ['AdvertisementJournal', 'AdvertisementNewspaper', 'ArticleJournal', 'ArticleNewspaper', 'BookHistorical'
                  ],
                  datasets: [
                    {
                      data: [1, 2, 5, 9, 8],
                      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#008000', '#800080'],
                      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#008000', '#800080'],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={4}>
          <CCard className="mb-4">
            <CCardHeader>Content Uploads by User</CCardHeader>
            <CCardBody>
              <CChartPie
                data={{
                  labels: ['General User', 'Admin'],
                  datasets: [
                    {
                      data: [15, 10],
                      backgroundColor: ['#FF6384', '#36A2EB'],
                      hoverBackgroundColor: ['#FF6384', '#36A2EB'],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
