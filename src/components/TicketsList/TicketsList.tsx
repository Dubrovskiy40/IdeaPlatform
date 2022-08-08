import React from 'react';
import {RootState} from "../../store";
import {useSelector} from "react-redux";
import TicketItem from '../TicketItem/TicketItem';


const TicketsList = () => {
    const tickets = useSelector((state: RootState) => state.tickets);

    // useEffect(() => {
    //     if (transplantsState.all) {
    //         dispatch(getTickets(ticketsJson.tickets))
    //     } else if (transplantsState.zero) {
    //         setTicketsState((prevState) => prevState.filter((ticket) => ticket.stops === 0))
    //         // dispatch(getTickets(ticketsJson.tickets.filter((ticket) => ticket.stops === 0)))
    //     } else if (transplantsState.one) {
    //         setTicketsState((prevState) => prevState.filter((ticket) => ticket.stops === 1))
    //         // dispatch(getTickets(ticketsJson.tickets.filter((ticket) => ticket.stops === 1)))
    //     } else if (transplantsState.two) {
    //         setTicketsState((prevState) => prevState.filter((ticket) => ticket.stops === 2))
    //         // dispatch(getTickets(ticketsJson.tickets.filter((ticket) => ticket.stops === 2)))
    //     } else if (transplantsState.three) {
    //         setTicketsState((prevState) => prevState.filter((ticket) => ticket.stops === 3))
    //         // dispatch(getTickets(ticketsJson.tickets.filter((ticket) => ticket.stops === 3)))
    //     }
    // }, [transplantsState]);

    return (
        <ul className="ticktetsList">
            {
                tickets?.map((ticket, index) => <TicketItem key={index} data={ticket}/>)
            }
        </ul>
    );
};

export default TicketsList;
