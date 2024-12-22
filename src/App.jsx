 import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Category from './Components/Category'
import Profile from './Components/Profile'
import AddCategory from './Components/AddCategory'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'
import Start from './Components/Start'
import EmployeeLogin from './Components/EmployeeLogin'
import EmployeeDetail from './Components/EmployeeDetail'
// import PrivateRoute from './Components/PrivateRoute'
import AdminRegistration from './Components/AdminRegistration'
import EmployeeMenu from './Components/EmployeeMenu'
import Attendence from './Components/Attendence'
import Report from './Components/Report'
import Notification from './Components/Notification'
import CalculateSalary from './Components/CalculateSalary'
import AddPayment from './Components/AddPayment'
import PayEmployees from './Components/PayEmployees'
import LiveLocation from './Components/LiveLocation'
import Document from './Components/Document'
import Settings from './Components/Settings'
import Support from './Components/Support'
import SupportHome from './Components/SupportHome'
import SupportAbout from './Components/SupportAbout'
import CurrentEmployee from './Components/CurrentEmployee'
import DailyRepoart from './Components/DailyRepoart'
import LeaveList from './Components/LeaveList'
import EmployeeDetails from './Components/EmployeeDetails'
import EditEmployeeIndivisual from './Components/EditEmployeeIndivisual'
import GeneratePayslip from './Components/GeneratePayslip'
import ListReimbuesement from './Components/ListReimbuesement'
import AttendanceRegularization from './Components/AttendanceRegularization'
import OdList from './Components/OdList'
import TaskList from './Components/TaskList'
import EmpDashboard from './Components/EmpDashboard'
import EmpAttendance from './Components/EmpAttendance'
import EmpViewAttendance from './Components/EmpViewAttendance'
import RequestLeave from './Components/RequestLeave'
import EmpHolidayList from './Components/EmpHolidayList'
import EmpDocument from './Components/EmpDocument'
import EmpTask from './Components/EmpTask'
import AddTask from './Components/AddTask'
import AssignTask from './Components/AssignTask'
import KycVerification from './Components/KycVerification'
import KycUpdate from './Components/KycUpdate'
import PaySalary from './Components/PaySalary'
import EditCompanyDetails from './Components/EditCompanyDetails'
import AddDepartments from './Components/AddDepartments'
import HRDepartment from './Components/HRDepartment'

 function App() {


  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/adminregistration' element={<AdminRegistration />}></Route>
        <Route path='/adminlogin' element={<Login />}></Route>

        {/* Employee Section */}
        <Route path='/employee_login' element={<EmployeeLogin />}></Route>

        {/* <Route path='/employee_detail/:employeeId' element={<EmployeeDetail />}> */}
        <Route path='/employee_detail' element={<EmployeeDetail />}>
        <Route path='' element={<EmpDashboard />}></Route>
        <Route path='/employee_detail/empAttendance' element={<EmpAttendance />}></Route>
        <Route path='/employee_detail/empViewAttendance' element={<EmpViewAttendance />}></Route>
        <Route path='/employee_detail/requestLeave' element={<RequestLeave />}></Route>
        <Route path='/employee_detail/empHolidayList' element={<EmpHolidayList />}></Route>
        <Route path='/employee_detail/empDocument' element={<EmpDocument />}></Route>
        <Route path='/employee_detail/empTask' element={<EmpTask />}></Route>
        </Route>
        {/* Employee Section Ends */}

        {/* Support Section Start*/}

        <Route path='/support' element={<Support />}>
          <Route path='/support/home' element={<SupportHome />}></Route>
          <Route path='/support/support-about' element={<SupportAbout />}></Route>
        </Route>
        
        {/* Support Section ends */}
        
        <Route path='/dashboard' element={
          // <PrivateRoute>
            <Dashboard />
          // </PrivateRoute>
        }>
          <Route path='' element={<Home />}></Route>
          <Route path='/dashboard/currentemployee' element={<CurrentEmployee />}></Route>
          <Route path='/dashboard/employeeDetails' element={<EmployeeDetails />}></Route>
          <Route path='/dashboard/editEmployeeIndivisual/:id' element={<EditEmployeeIndivisual />}
          ></Route>
          <Route path='/dashboard/dailyReport' element={<DailyRepoart />}></Route>
          <Route path='/dashboard/leaveList' element={<LeaveList />}></Route>
          <Route path='/dashboard/generatePayslip' element={<GeneratePayslip />}></Route>
          <Route path='/dashboard/listReimbuesement' element={<ListReimbuesement />}></Route>
          <Route path='/dashboard/attendanceRegularization' element={<AttendanceRegularization />}></Route>
          <Route path='/dashboard/odList' element={<OdList />}></Route>
          <Route path='/dashboard/taskList' element={<TaskList />}></Route>
          <Route path='/dashboard/employeemenu' element={<EmployeeMenu />}>
          </Route>
          <Route path='/dashboard/employee' element={<Employee />}></Route>
          <Route path='/dashboard/category' element={<Category />}></Route>
          <Route path='/dashboard/add_category' element={<AddCategory />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
          <Route path='/dashboard/attendence' element={<Attendence />}></Route>
          <Route path='/dashboard/report' element={<Report />}></Route>
          <Route path='/dashboard/notification' element={<Notification />}></Route>
          <Route path='/dashboard/calculate-salary' element={<CalculateSalary />}></Route>
          <Route path='/dashboard/add-payment' element={<AddPayment />}></Route>
          <Route path='/dashboard/pay-employees' element={<PayEmployees />}></Route>
          <Route path='/dashboard/kycVerification' element={<KycVerification />}></Route>
          <Route path='/dashboard/kycUpdate/:employeeId' element={<KycUpdate />}></Route>
          <Route path='/dashboard/paySalary/:employeeId' element={<PaySalary />}></Route>
          <Route path='/dashboard/live-location' element={<LiveLocation />}></Route>
          <Route path='/dashboard/document' element={<Document />}></Route>
          <Route path='/dashboard/addtask' element={<AddTask />}></Route>
          <Route path='/dashboard/assigntask/:employeeId' element={<AssignTask />}></Route>
          <Route path='/dashboard/settings' element={<Settings />}></Route>
          <Route path='/dashboard/profile' element={<Profile />}></Route>
          <Route path='/dashboard/editCompanyDetails' element={<EditCompanyDetails />}></Route>
          <Route path='/dashboard/AddDepartments' element={<AddDepartments />}></Route>
          <Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
          <Route path='/dashboard/edit_employee/:employeeId' element={<EditEmployee />}></Route>
          <Route path='/dashboard/HRDepartment/ ' element={<HRDepartment  />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;