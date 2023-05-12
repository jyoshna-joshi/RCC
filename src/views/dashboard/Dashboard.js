import React, { useState , useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import {
  CWidgetStatsF,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilLibrary,
  cilBellExclamation,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import {
  CChartPie,
} from '@coreui/react-chartjs'

import avatar1 from '../../assets/images/avatars/1.jpg'

const Dashboard = () => {
  const [widgetData, setData] = useState([
    { all: 0, pending: 0, admin: 0, user: 0}
  ])
  const [chartData, setChartData] = useState()

  useEffect(() => {
    const fetchata = async () => { 

        const response = await fetch('http://44.202.58.84:3000/content/list-by-status');
        const data = await response.json();
        var allCount = 0, pendingCount = 0, adminCount = 0, userCount = 0
        var typeMap = new Map();

        allCount = data.length;

        for (var i in data) {
          if (data[i].creator === 'admin') {
            adminCount++;
          }
          if (data[i].creator === 'public') {
            userCount++;
          }
          if (data[i].status === 'Pending') {
            pendingCount++;
          }
          typeMap.set(data[i].type, (typeMap.get(data[i].type) ?? 0) + 1);
        }
        let sortedTypeMap = new Map([...typeMap.entries()].sort((a, b) => b[1] - a[1]));

        var arrayTmp = Array.from(sortedTypeMap).slice(0, 5);
        
        setData({ all: allCount, pending: pendingCount, admin: adminCount, user: userCount });
        console.log(data);
        setChartData(arrayTmp);

        console.log(arrayTmp);
    }

    // Call the function
    fetchata();
  }, []);

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
        navigate("/content/list-by-creator?creator=public");
        return;
      case 'admin':
        navigate("/content/list-by-creator?creator=admin");
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
              icon={<CIcon width={24} icon={cilLibrary} size="xl"/>}
              padding={false}
              title="All Content"
              value={widgetData.all}
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
              value={widgetData.pending}
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
              value={widgetData.user}
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
              value={widgetData.admin}
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
                  //labels: [chartData[0][0], chartData[1][0], chartData[2][0], chartData[3][0], chartData[4][0]],
                  datasets: [
                    {
                      //data: [chartData[0][1], chartData[1][1], chartData[2][1], chartData[3][1], chartData[4][1]],
                      backgroundColor: ['#072F5F', '#1261A0', '#3895D3', '#58CCED', '#DFE9F3'],
                      hoverBackgroundColor: ['#072F5F', '#1261A0', '#3895D3', '#58CCED', '#DFE9F3'],
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
                      data: [widgetData.user, widgetData.admin],
                      backgroundColor: ['#750F37', '#EA5F89'],
                      hoverBackgroundColor: ['#750F37', '#EA5F89'],
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
