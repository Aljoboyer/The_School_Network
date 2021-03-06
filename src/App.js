import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalDashboard from "./Pages/PrincipalPanel/PrincipalDashboard/PrincipalDashboard";
import PrincipalHome from "./Pages/PrincipalPanel/PrincipalHome/PrincipalHome";
import PrincipalPublishNotice from "./Pages/PrincipalPanel/PrincipalPublishNotice/PrincipalPublishNotice";
import TeachersPanel from "./Pages/TeachersPanel/TeachersPanel/TeachersPanel";
import HomePage from "./Pages/AllUser/HomePageComponents/HomePage";
import LogInPage from "./Pages/AllUser/Login/LogInPage";
import PrincipalAnnouncement from "./Pages/PrincipalPanel/PrincipalAnnouncement/PrincipalAnnouncement";
import TeachersPanelHome from "./Pages/TeachersPanel/TeachersPanelHome/TeachersPanelHome";
import TeachersNoticePublish from "./Pages/TeachersPanel/TeachersNoticePublish/TeachersNoticePublish";
import AdmissionPolicy from "./Pages/AllUser/Admission/AdmissionPoliciy";
import HowToApply from "./Pages/AllUser/Admission/HowToApply";
import AdmissionForm from "./Pages/AllUser/Admission/AdmissionForm";
import TeachersClassRoutine from "./Pages/TeachersPanel/TeachersClassRoutine/TeachersClassRoutine";
import TeachersExamRoutine from "./Pages/TeachersPanel/TeachersExamRoutine/TeachersExamRoutine";

// student imports
import StudentDashboard from "./Pages/StudentPanel/StudentDashboard/StudentDashboard";
import StudentHome from "./Pages/StudentPanel/StudentHome/StudentHome";
import RequestCare from "./Pages/StudentPanel/RequestCare/RequestCare";
import PrincipalManageTeacher from "./Pages/PrincipalPanel/PrincipalManageTeacher/PrincipalManageTeacher";
import RegisterTeacher from "./Pages/PrincipalPanel/RegisterTeacher/RegisterTeacher";
import UploadPayment from "./Pages/PrincipalPanel/UploadPayment/UploadPayment";
import Canteen from "./Pages/AllUser/Facilities/Canteen";
import Library from "./Pages/AllUser/Facilities/Library";
import Auditoraim from "./Pages/AllUser/Facilities/Auditoraim";
import Games from "./Pages/AllUser/Facilities/Games";
import AboutUsPage from "./Pages/AllUser/HomePageComponents/AboutUsPage/AboutUsPage";
import StudentPay from "./Pages/StudentPanel/StudentPay/StudentPay";
import StAnalytics from "./Pages/StudentPanel/StudentDashboard/StAnalytics/StAnalytics";
import SeeResult from "./Pages/StudentPanel/StudentDashboard/SeeResult/SeeResult";
import Transcript from "./Pages/StudentPanel/StudentDashboard/Transcript/Transcript";
import TeachersAssignment from "./Pages/TeachersPanel/TeachersAssignment/TeachersAssignment";
import RegisterStudent from "./Pages/Shared/RegisterStudent/RegisterStudent";
import CheckPaymentStatus from "./Pages/PrincipalPanel/CheckPaymentStatus/CheckPaymentStatus";
import ManageStudent from "./Pages/Shared/ManageStudent/ManageStudent";
import SeeExtraRequestPage from "./Pages/TeachersPanel/SeeExtraRequestPage/SeeExtraRequestPage";
import Contact from "./Pages/AllUser/Contact/Contact";
import ClassFive from "./Pages/Shared/ResultAdd/ClassFive";
import ClassOneToTwo from "./Pages/Shared/ResultAdd/ClassOneToTwo";
import ClassThreeAndFour from "./Pages/Shared/ResultAdd/ClassThreeAndFour";
import ViewStudentsPerformance from "./Pages/Shared/ViewStudentsPerformance/ViewStudentsPerformance";
import PreviousNotice from "./Pages/PrincipalPanel/PreviousPages/PreviousNotice";
import PreviousAnnouncement from "./Pages/PrincipalPanel/PreviousPages/PreviousAnnouncement";
import TeachersProfile from "./Pages/TeachersPanel/TeachersProfile/TeachersProfile";
import ViewIndividualCare from "./Pages/TeachersPanel/SeeExtraRequestPage/ViewIndividualCare";
import StudentProfile from "./Pages/StudentPanel/StudentProfile/StudentProfile";
import SecondSemester from "./Pages/StudentPanel/StudentDashboard/SeeResult/SecondSemester";
import NoticBoard from "./Pages/StudentPanel/NoticeBoard/NoticeBoard";
import MonthlyPayment from "./Pages/StudentPanel/MonthlyPayment/MonthlyPayment";
import AdmissionSuccess from "./Pages/AllUser/Admission/AdmissionSuccess";
import StudentPaymentSuccess from "./Pages/StudentPanel/StudentPay/StudentPaymentSuccess";
import IndividualPayment from "./Pages/PrincipalPanel/CheckPaymentStatus/IndividualPayment";
import CheckAdmissionForm from "./Pages/PrincipalPanel/CheckAdmissionForm/CheckAdmissionForm";
import IndividualForms from "./Pages/PrincipalPanel/CheckAdmissionForm/IndividualForms";
import BooksAdd from "./Pages/Shared/LibraryPages/BooksAdd/BooksAdd";
import OurTeachers from "./Pages/AllUser/HomePageComponents/OurTeacers";
import ConcessionForm from "./Pages/StudentPanel/ConcessionForm/ConcessionForm";
import ManageBooks from "./Pages/Shared/LibraryPages/BooksManage/ManageBooks";
import EditBook from "./Pages/Shared/LibraryPages/BooksManage/EditBook/EditBook";
import LentBookForm from "./Pages/StudentPanel/LibraryStudentSection/LentBookForm";
import BookView from "./Pages/StudentPanel/LibraryStudentSection/BookView";
import AllNoticesPage from "./Pages/AllUser/HomePageComponents/AllNoticePage/AllNoticesPage";
import YourLentedBookList from "./Pages/StudentPanel/LibraryStudentSection/YourLentedBookList";
import RegisterOtherStaff from "./Pages/PrincipalPanel/RegisterOtherStaff/RegisterOtherStaff";
import LibrarianDashboard from "./Pages/LibrarianDashboard/LibrarianDashboard/LibrarianDashboard";
import LibrarianDashboardHome from "./Pages/LibrarianDashboard/LibrarianDashboardHome";
import CheckLendBookList from "./Pages/LibrarianDashboard/CheckLendBookList";
import CategoryPage from "./Pages/StudentPanel/LibraryStudentSection/CategoryPage";
import BookAnalytics from "./Pages/LibrarianDashboard/BookAnalytics";
import NotificationPage from "./Pages/StudentPanel/NotificationPage/NotificationPage";
import VideoSubmission from "./Pages/TeachersPanel/VideoSubmission/VideoSubmission";
import VideosFromTeacher from "./Pages/StudentPanel/VideosFromTeacher/VideosFromTeacher";
import WatchVideo from "./Pages/StudentPanel/WatchVideo/WatchVideo";
import ConcessionFormP from "./Pages/PrincipalPanel/ConcessionForm/ConcessionForm";
import SingleData from "./Pages/PrincipalPanel/ConcessionForm/SingleData";
import ClassRoutine from "./Pages/StudentPanel/ClassRoutine/ClassRoutine";
import ExamRoutine from "./Pages/StudentPanel/ExamRoutine/ExamRoutine";
import TeachersAddAttendance from "./Pages/TeachersPanel/TeachersAddAttendance/TeachersAddAttendance";
import StudentSubmitAssignment from "./Pages/StudentPanel/StudentDashboard/StudentMyDocuments/StudentSubmitAssignment";
import ViewAssignmentSubmission from "./Pages/TeachersPanel/TeachersAssignment/ViewAssignmentSubmission";
import Privateroute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                    {/* --------------All User Homepage Routes Start--------------- */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/aboutus" element={<AboutUsPage />} />
                    <Route path="/login" element={<LogInPage />} />
                    <Route
                        path="/admissionPolicy"
                        element={<AdmissionPolicy />}
                    />
                    <Route path="/howtoapply" element={<HowToApply />} />
                    <Route path="/admissionForm" element={<AdmissionForm />} />
                    <Route path="/canteen" element={<Canteen />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/auditoriam" element={<Auditoraim />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/ourTeacehrs" element={<OurTeachers />} />
                    <Route path="/AdmissionSuccess" element={<AdmissionSuccess />} />
                    <Route path="/AllNotices" element={<AllNoticesPage />} />
                    {/* --------------All User Homepage Routes End--------------- */}
                    {/* --------------Principal Routes Start-------------- */}
                    <Route
                        path="/PrincipalDashboard"
                        element={<Privateroute><PrincipalDashboard /></Privateroute>}
                    >
                        <Route
                            path="/PrincipalDashboard"
                            element={<PrincipalHome />}
                        />
                        <Route
                            path="/PrincipalDashboard/PrincipalPublishNotice"
                            element={<PrincipalPublishNotice />}
                        />
                        <Route
                            path="/PrincipalDashboard/PrincipalAnnouncement"
                            element={<PrincipalAnnouncement />}
                        />
                        <Route
                            path="/PrincipalDashboard/PrincipalManageTeacher"
                            element={<PrincipalManageTeacher />}
                        />
                        <Route
                            path="/PrincipalDashboard/RegisterTeacher"
                            element={<RegisterTeacher />}
                        />
                        <Route
                            path="/PrincipalDashboard/PrincipalManageStudent"
                            element={<ManageStudent/>}
                        />
                        <Route
                            path="/PrincipalDashboard/UploadPayment"
                            element={<UploadPayment />}
                        />
                        <Route
                            path="/PrincipalDashboard/RegisterStudent"
                            element={<RegisterStudent />}
                        />
                        <Route
                            path="/PrincipalDashboard/CheckPaymentStatus"
                            element={<CheckPaymentStatus />}
                        /> 
                        <Route
                            path="/PrincipalDashboard/ViewStudentsPerformance/:id"
                            element={<ViewStudentsPerformance />}
                        />
                        <Route
                            path="/PrincipalDashboard/PreviousNotice"
                            element={<PreviousNotice />}
                        />
                        <Route
                        path="/PrincipalDashboard/PreviousNotice"
                        element={<PreviousNotice />}
                        />
                        <Route
                        path="/PrincipalDashboard/PreviousAnnouncement"
                        element={<PreviousAnnouncement />}
                        />
                        <Route
                        path="/PrincipalDashboard/IndividualPayment"
                        element={<IndividualPayment />}
                        />
                         <Route
                        path="/PrincipalDashboard/CheckAdmissionForm"
                        element={<CheckAdmissionForm />}
                        />
                        <Route
                        path="/PrincipalDashboard/IndividualForms/:id"
                        element={<IndividualForms />}
                        />
                        <Route
                        path="/PrincipalDashboard/BooksAdd"
                        element={<BooksAdd />}
                        />
                        <Route
                        path="/PrincipalDashboard/RegisterOtherStaff"
                        element={<RegisterOtherStaff />}
                        />
                       <Route
                        path="/PrincipalDashboard/ConcessionForm"
                        element={<ConcessionFormP />}
                      />

                      <Route
                        path="/PrincipalDashboard/SingleData/:id"
                        element={<SingleData />}
                      />
                    </Route>
                    {/* --------------Principal Routes End--------------- */}
                    {/* --------------Teacher Routes Start */}
                    <Route 
                        path="/TeachersDashboard"
                        element={<Privateroute><TeachersPanel /></Privateroute>}
                    >
                        <Route
                            path="/TeachersDashboard"
                            element={<TeachersPanelHome />}
                        />
                        <Route
                            path="/TeachersDashboard/Profile"
                            element={<TeachersProfile />}
                        />
                        <Route
                            path="/TeachersDashboard/NoticePublish"
                            element={<TeachersNoticePublish />}
                        />
                        <Route
                            path="/TeachersDashboard/ClassRoutine"
                            element={<TeachersClassRoutine />}
                        />
                        <Route
                            path="/TeachersDashboard/ExamRoutine"
                            element={<TeachersExamRoutine />}
                        />
                        <Route
                            path="/TeachersDashboard/RegisterStudent"
                            element={<RegisterStudent />}
                        />
                        <Route
                            path="/TeachersDashboard/publishAssignment"
                            element={<TeachersAssignment />}
                        />
                        <Route
                            path="/TeachersDashboard/SeeExtraRequestPage"
                            element={<SeeExtraRequestPage />}
                        />
                         <Route
                            path="/TeachersDashboard/ManageStudent"
                            element={<ManageStudent />}
                        />
                        <Route
                            path="/TeachersDashboard/ClassFive"
                            element={<ClassFive />}
                        />
                        <Route
                            path="/TeachersDashboard/ClassOneToTwo"
                            element={<ClassOneToTwo />}
                        />
                        <Route
                            path="/TeachersDashboard/ClassThreeAndFour"
                            element={<ClassThreeAndFour />}
                        />
                        <Route
                        path="/TeachersDashboard/ViewNotice"
                        element={<PreviousNotice />}
                        />
                        <Route
                            path="/TeachersDashboard/ViewStudentsPerformance/:id"
                            element={<ViewStudentsPerformance />}
                        />
                        <Route
                            path="/TeachersDashboard/ViewIndividualCare/:id"
                            element={<ViewIndividualCare />}
                        />
                        <Route
                        path="/TeachersDashboard/videoSubmission"
                        element={<VideoSubmission />}
                      />
                      <Route
                        path="/TeachersDashboard/TeachersAddAttendance"
                        element={<TeachersAddAttendance />}
                      />
                    <Route
                        path="/TeachersDashboard/ViewSubmission/:id"
                        element={<ViewAssignmentSubmission />}
                      />
                    </Route>
                    {/* --------------Teacher Routes End-------------- */}
                    {/* --------------------student route start-----------------------*/}
                    <Route path="/StudentDashboard" element={<Privateroute><StudentDashboard /></Privateroute>}>
                        <Route path="/StudentDashboard" element={<StudentHome />} />
                        <Route
                        path="/StudentDashboard/RequestCare"
                        element={<RequestCare />}
                        />
                        <Route
                        path="/StudentDashboard/SubmitDocuments"
                        element={<StudentSubmitAssignment />}
                        />
                        <Route
                        path="/StudentDashboard/StudentPay/:id"
                        element={<StudentPay />}
                        />
                        <Route path="/StudentDashboard/seeResult" element={<SeeResult />} />
                        <Route
                        path="/StudentDashboard/transcript"
                        element={<Transcript />}
                        />
                        <Route
                        path="/StudentDashboard/StudentAnalytics"
                        element={<StAnalytics />}
                        />
                       <Route
                        path="/StudentDashboard/StudentProfile"
                        element={<StudentProfile />}
                        />
                      <Route
                        path="/StudentDashboard/secondSemester"
                        element={<SecondSemester />}
                         />
                         <Route
                        path="/StudentDashboard/NoticBoard"
                        element={<NoticBoard />}
                         />
                         <Route
                        path="/StudentDashboard/MonthlyPayment"
                        element={<MonthlyPayment />}
                         />
                         <Route
                        path="/StudentDashboard/StudentPaymentSuccess"
                        element={<StudentPaymentSuccess />}
                         /> 
                         <Route
                        path="/StudentDashboard/NotificationPage"
                        element={<NotificationPage />}
                         />      
                        
                        <Route
                        path="/StudentDashboard/concessionForm"
                        element={<ConcessionForm />}
                      />
                         <Route
                        path="/StudentDashboard/videos"
                        element={<VideosFromTeacher />}
                      />
                      <Route
                        path="/StudentDashboard/watchVideo/:id"
                        element={<WatchVideo />}
                      />
                      <Route
                        path="/StudentDashboard/ClassRoutine"
                        element={<ClassRoutine />}
                      />
                       <Route
                        path="/StudentDashboard/ExamRoutine"
                        element={<ExamRoutine />}
                      />
                    </Route>
            {/* -----------students library route-------------- */}
                    <Route
                        path="/LibraryBooks"
                        element={<Privateroute><BookView /></Privateroute>}
                    />
                    <Route
                        path="/YourLentedBookList"
                        element={<Privateroute><YourLentedBookList /></Privateroute>}
                    />
                    <Route
                        path="/LentBookForm/:id"
                        element={<Privateroute><LentBookForm /></Privateroute>}
                    />
                    <Route
                        path="/CategoryPage"
                        element={<CategoryPage />}
                    />
        {/* -----------students library route end-------------- */}  
                    {/* --------------------student route end-------------------------*/}
        {/* ---------------Librarian route start------------- */}
                <Route
                        path="/LibrarianDashboard"
                        element={<Privateroute><LibrarianDashboard /></Privateroute>}
                    >
                        <Route
                            path="/LibrarianDashboard"
                            element={<LibrarianDashboardHome />}
                        />
                        <Route
                        path="/LibrarianDashboard/BooksAdd"
                        element={<BooksAdd />}
                        />
                        <Route
                        path="/LibrarianDashboard/ManageBooks"
                        element={<ManageBooks />}
                        />
                        <Route
                        path="/LibrarianDashboard/EditBook/:id"
                        element={<EditBook />}
                        />
                        <Route
                        path="/LibrarianDashboard/CheckLendBookList"
                        element={<CheckLendBookList />}
                        />
                        <Route
                        path="/LibrarianDashboard/BookAnalytics"
                        element={<BookAnalytics />}
                        />
                </Route>
        {/* ---------------Librarian route end------------- */}
            </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;