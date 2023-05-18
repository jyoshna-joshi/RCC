import Logo from '../images/logo.png'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CButton,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import { useNavigate } from "react-router-dom";
import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'

const Navbar = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  let navigate = useNavigate();

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink href="/">
              <img src={Logo} height={100} alt="Logo" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/" component={NavLink}>HOME</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/selectSaveTemplateContent">UPLOAD</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CButton onClick={() => {navigate('/selectLoginForm')}} color="dark" variant="outline">Admin Login</CButton>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default Navbar