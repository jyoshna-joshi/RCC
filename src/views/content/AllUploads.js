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
import { DocsExample } from '../../components'

export default function Tables() {

  const [ countries, setCountries ] = useState([]);
 
  useEffect(() => {
    const fetchata = async () => {
 
      const response = await fetch(
        'http://44.202.58.84:3000/listByStatus?status=approved');
        const data =  [
          { 'status': 'Approved', 'title': 'AdvertisementNewspaper', 'format': 'AdvertisementNewspaper' , 'date':'02/05/2023', 'rowColor':'success'},
          { 'status': 'Approved', 'title': 'AdvertisementNewspaper', 'format': 'AdvertisementNewspaper' , 'date':'02/05/2023', 'rowColor':'success' },
          { 'status': 'Approved', 'title': 'AAA', 'format': 'ArticleJournal' , 'date':'02/05/2023', 'rowColor':'success' },
          { 'status': 'Approved', 'title': 'AAA', 'format': 'ArticleJournal' , 'date':'02/05/2023', 'rowColor':'success'},
          { 'status': 'Approved', 'title': 'AAA', 'format': 'BookTechnical' , 'date':'02/05/2023', 'rowColor':'success' },
          { 'status': 'Approved', 'title': 'AAA', 'format': 'BookTechnical' , 'date':'02/05/2023', 'rowColor':'success' },
          { 'status': 'Approved', 'title': 'AAA', 'format': 'AdvertisementJournal' , 'date':'02/05/2023', 'rowColor':'success'},
          { 'status': 'Rejected', 'title': 'AAA', 'format': 'AdvertisementJournal' , 'date':'02/05/2023', 'rowColor':'danger' },
          { 'status': 'Rejected', 'title': 'AAA', 'format': 'ArticleJournal' , 'date':'02/05/2023', 'rowColor':'danger' },
          { 'status': 'Pending', 'title': 'AAA', 'format': 'AdvertisementNewspaper', 'rowColor':'warning' },
          { 'status': 'Pending', 'title': 'AAA', 'format': 'AdvertisementJournal', 'rowColor':'warning'  },
          { 'status': 'Pending', 'title': 'AAA', 'format': 'AdvertisementJournal', 'rowColor':'warning'  },
          { 'status': 'Pending', 'title': 'AAA', 'format': 'AdvertisementJournal', 'rowColor':'warning'  },
          { 'status': 'Pending', 'title': 'AAA', 'format': 'BookTechnical', 'rowColor':'warning'  },
          { 'status': 'Pending', 'title': 'AAA', 'format': 'ArticleJournal', 'rowColor':'warning'  },
        ];

        //use only 3 sample data
        setCountries( data.slice( 0,100) )      
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
                  <CTableRow key={key} color={country.rowColor}>
                      <CTableDataCell className='table-data'>{'01/05/2023'}</CTableDataCell>
                      <CTableDataCell className='table-data'>{country.format }</CTableDataCell>
                      <CTableDataCell className='table-data'>{country.format }</CTableDataCell>
                      <CTableDataCell className='table-data'>{country.date }</CTableDataCell>
                      <CTableDataCell className='table-data'>{country.status }</CTableDataCell>
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
