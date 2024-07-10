import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilPeople,
  cilAddressBook,
  cilSpeedometer,
  cilVideo,
  cilFeaturedPlaylist,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,

  },
  {
    component: CNavTitle,
    name: 'Services',
  },
  {
    component: CNavItem,
    name: 'All Enterprenuer',
    to: '/enterprenuer/all',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'All Investor',
    to: '/investor/all',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Consultancy Bookings',
    to: '/bookings/all',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Webinars',
    to: '/webinars/upload',
    icon: <CIcon icon={cilVideo} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Webinars Booking',
    to: '/webinarsbooking/all',
    icon: <CIcon icon={cilFeaturedPlaylist} customClassName="nav-icon" />,
  },
]

export default _nav
