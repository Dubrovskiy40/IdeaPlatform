import React from 'react';
import {RootState} from "../../store";
import {useSelector} from "react-redux";
import TicketItem from '../TicketItem/TicketItem';
import {GetTicketsPayloadType} from "../../actions/ticketsAction";

const TicketsList = () => {
    const tickets = useSelector((state: RootState) => state.tickets);

    return (
        <ul className="ticktetsList">
            {
                tickets?.map((ticket: GetTicketsPayloadType, index) => <TicketItem key={index} data={ticket}/>)
            }
        </ul>
    );
};

export default TicketsList;
