import React from 'react'
import { Link } from 'react-router-dom'

const PayEmployees = () => {
  return (
    <div className='pay_employee_bg bg-head'>
      <div className='text-center'>
      <div >
        <img src="/Images/pay-emp-bg.png" alt="PayEmpBg" className='img-pay-emp'/>
      </div>
      <div className=''>
        <p>Pay your employees using EMS in simple steps</p>
      </div>
      <div>
        <p>Please complete your business KYC now to activate your EMS wallet</p>
      </div>
      <div>
        <Link 
        to={'/dashboard/kycVerification'}
        className='btn btn-info'
        >
          Do KYC Verification
        </Link>
      </div>
      </div>
    </div>
  )
}

export default PayEmployees