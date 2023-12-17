import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Welcome from "./pages/Welcome"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import OneTicket from "./modules/user/pages/OneTicket"
import UserTickets from "./modules/user/pages/UserTickets"
import FixturePage from "./modules/user/pages/FixturePage"
import BookTicket from "./modules/user/pages/BookTicket"
import UserHome from "./modules/user/pages/UserHome"
import AdminFixtures from "./modules/admin/pages/AdminFixtures"
import AdminTicketManagement from "./modules/admin/pages/AdminTicketManagement"
import AdminFixtureReport from "./modules/admin/pages/AdminFixtureReport"
import AdminOneFixtureReport from "./modules/admin/pages/AdminOneFixtureReport"
import AdminUserReport from "./modules/admin/pages/AdminUserReport"
import AdminPageNotFound from "./modules/admin/pages/AdminPageNotFound"
import UserPageNotFound from "./modules/user/pages/UserPageNotFound"
import AdminDashLayout from "./modules/admin/layout/AdminDashLayout"
import UserHomeLayout from "./modules/user/layout/UserHomeLayout"
import UpdateFixtureForm from "./modules/forms/UpdateFixtureForm"

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Welcome/> },
    { path: "/login", element: <Login/> },
    { path: "/signup", element: <Register/> },

    //user pages
    {
    path: "/eticket", element: <UserHomeLayout />,
    children:[
    { index: true, element: <UserHome/> },
    { path: "book", element: <BookTicket/> },
    { path: "fixtures", element: <FixturePage/> },
    { path: "tickets", element: <UserTickets/> },
    { path: "tickets/:id", element: <OneTicket/> },
    { path: "*", element: <UserPageNotFound /> },
    ]
    },

    //admin pages
    {
      path: "/admin", element: <AdminDashLayout />,
      children: [
        { index: true, element: <AdminFixtures /> },
        { path: "update/:id", element: <UpdateFixtureForm /> },
        { path: "ticketmanagement", element: <AdminTicketManagement /> },
        { path: "report", element: <AdminFixtureReport /> },
        { path: "report/:id", element: <AdminOneFixtureReport /> },
        { path: "users", element: <AdminUserReport/> },
        { path: "*", element: <AdminPageNotFound /> },
      ]
    },
  ])

  return (
    <>     
     <RouterProvider router={router} />    
    </>
  )
}

export default App
