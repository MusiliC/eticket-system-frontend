import dashboardIcon from "/public/dashboard.png";
import fixtureIcon from "/public/fixture.png";
import ticketIcon from "/public/ticket.png";
import reportIcon from "/public/report.png";
import userIcon from "/public/user.png";




export const userLinks = [
    {
      id: "/eticket",
      title: "Home",
    },
    {
        id: "./tickets",
        title: "Tickets",
      },
    {
      id: "./fixtures",
      title: "Fixtures",
    }
  
  ];

  export const adminLinks = [
    {
      id: "/admin",
      title: "MENU",
      icon:""
    },
    {
      id: "/admin",
      title: "Dashboard",
      icon:dashboardIcon
    },
    {
      id: "/admin",
      title: "Fixtures",
      icon:fixtureIcon
    },
    {
      id: "/admin/ticketmanagement",
      title: "Ticket Management",
      icon:ticketIcon
    },
    {
      id: "/admin/report",
      title: "Ticket Reports",
      icon:reportIcon
    },
    {
      id: "/admin/users",
      title: "Users",
      icon:userIcon
    },
  
  ];