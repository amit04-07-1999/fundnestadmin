import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilPeople,
  cilAddressBook,
  cilSpeedometer,
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
    name: 'All Bookings',
    to: '/bookings/all',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Add Webinars',
    to: '/webinars/upload',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavTitle,
  //   name: 'Trips',
  // },
  // {
  //   component: CNavItem,
  //   name: 'All Trips',
  //   to: '/trips',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Bidding',
  //   to: '/bidding',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'My Bids',
  //   to: '/bidding/all',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
]

export default _nav
