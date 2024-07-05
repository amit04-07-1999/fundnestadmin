import React, { useEffect, useState } from 'react'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
} from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
  const [enterprenuerCount, setEnterprenuerCount] = useState(0)
  const [investorCount, setInvestorCount] = useState(0)
  const [bookingCount, setBookingCount] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    let loggedIn = false;
    if (localStorage.getItem('user')) {
      loggedIn = true;
    }
    if (!loggedIn) {
      navigate('/login')
    }
    if (loggedIn) {
      const user = localStorage.getItem('user')
      const token = localStorage.getItem('token')
      async function getEnterprenuers() {
        const res = await axios.get(`http://localhost:4000/admin/getEnterprenuers`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setEnterprenuerCount(res.data.length)
        
      }
      async function getInvestors() {
        const res = await axios.get(`http://localhost:4000/admin/getInvestors`,{
          headers: {
          Authorization: `Bearer ${token}`
          }
        })
        setInvestorCount(res.data.length)
      }
      async function getBookings() {
        const res = await axios.get(`http://localhost:4000/admin/getAppointments`,{
          headers: {
          Authorization: `Bearer ${token}`
          }
        })
        setBookingCount(res.data.length)
      }

      getEnterprenuers()
      getInvestors()
      getBookings()
    }
  }, [])



  return (
    <div>
      <CCard
        textBgColor={'primary'}
        className="mb-3"
        style={{ maxWidth: '18rem' }}
      >
        <CCardHeader>Enterprenuers</CCardHeader>
        <CCardBody>
          <CCardTitle>Total Enterprenuers: {enterprenuerCount}</CCardTitle>
        </CCardBody>
      </CCard>
      <CCard
        textBgColor={'secondary'}
        className="mb-3"
        style={{ maxWidth: '18rem' }}
      >
        <CCardHeader>Investors</CCardHeader>
        <CCardBody>
          <CCardTitle>Total Investors: {investorCount} </CCardTitle>
        </CCardBody>
      </CCard>
      <CCard
        textBgColor={'secondary'}
        className="mb-3"
        style={{ maxWidth: '18rem' }}
      >
        <CCardHeader>Bookings</CCardHeader>
        <CCardBody>
          <CCardTitle>Total Bookings: {bookingCount} </CCardTitle>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Dashboard
