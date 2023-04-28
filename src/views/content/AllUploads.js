import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from '../../Components'

export default function Tables() {

  const [ countries, setCountries ] = useState([]);
 
  useEffect(() => {
    const fetchata = async () => {
 
      const response = await fetch(
        'https://api.sampleapis.com/countries/countries');
        const data = await response.json();

        //use only 3 sample data
        setCountries( data.slice( 0,3) )      
    }
 
    // Call the function
    fetchata();
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
                  <CTableHeaderCell scope="col">Approved/Rejected Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {
                  countries.map( (country,key) =>
                  <CTableRow key={key}>
                      <CTableDataCell className='table-data'>{country.name }</CTableDataCell>
                      <CTableDataCell className='table-data'>{country.capital }</CTableDataCell>
                      <CTableDataCell className='table-data'><img width='20px' height='10px'
                      src={ country.media.flag } alt="flag" /></CTableDataCell>
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
