import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CButton,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from '../../components'
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
import CIcon from '@coreui/icons-react'
export default function Tables() {

  const [ countries, setCountries ] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
 
      const response = await fetch(
        'http://44.202.58.84:3000/listByStatus?status=pending');
        const data = [
          { 'status': 'Pending', 'title': 'AAA', 'format': 'AdvertisementNewspaper', 'rowColor':'warning' },
          { 'status': 'Pending', 'title': 'AAA', 'format': 'AdvertisementJournal', 'rowColor':'warning'  },
          { 'status': 'Pending', 'title': 'AAA', 'format': 'AdvertisementJournal', 'rowColor':'warning'  },
          { 'status': 'Pending', 'title': 'AAA', 'format': 'AdvertisementJournal', 'rowColor':'warning'  },
          { 'status': 'Pending', 'title': 'AAA', 'format': 'BookTechnical', 'rowColor':'warning'  },
          { 'status': 'Pending', 'title': 'AAA', 'format': 'ArticleJournal', 'rowColor':'warning'  },
        ];

        //use only 3 sample data
        setCountries( data.slice( 0,3) )      
    }
 
    // Call the function
    fetchData();
  }, []);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Date Uploaded</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">View</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {
                  countries.map( (country,key) =>
                  <CTableRow key={key}>
                      <CTableDataCell className='table-data'>{'01/05/2023' }</CTableDataCell>
                      <CTableDataCell className='table-data'>{country.format }</CTableDataCell>
                      <CTableDataCell className='table-data'>{country.format }</CTableDataCell>
                      <CTableDataCell className='table-data'>
                      <CButton
                        key={key}
                        color={"#FFFFFF"}
                        href="#"
                      >
                        <CIcon icon={cilExternalLink} className="me-2" />
                      </CButton>
                      </CTableDataCell>
                  </CTableRow>
                  )
                }
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>      
    </CRow>
  )
}
