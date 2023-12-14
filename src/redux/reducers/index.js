import authReducer from "./auth";
import fixtureReducer from "./fixture";
import bookTicketReducer from "./bookTicket";
import ticketManagementReducer from "./ticketManagement";

const rootReducer = {
    authReducer,
    fixtureReducer,
    bookTicketReducer,
    ticketManagementReducer
}

export default rootReducer;