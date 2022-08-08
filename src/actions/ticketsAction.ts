import {
    GET_TICKETS,
    FILTER_TICKETS
} from '../store/types/ticketsTypes';
import {InitialStateTicketsReducerArrayType} from '../store/ticketsReducer';

export type ActionsTypes = GetTicketsPayloadType | FilterTicketsActionType

type GetTicketsPayloadType = {
    origin: string
    origin_name: string,
    destination: string,
    destination_name: string,
    departure_date: string,
    departure_time: string,
    arrival_date: string,
    arrival_time: string,
    carrier: string,
    stops: number,
    price: number
};

export type GetTicketsActionType = {
    type: typeof GET_TICKETS
    payload: Array<GetTicketsPayloadType>
};

export const getTickets = (tickets: Array<GetTicketsPayloadType>): GetTicketsActionType => ({
    type: GET_TICKETS,
    payload: tickets
});

export type FilterTicketsActionType = {
    type: typeof FILTER_TICKETS
    payload: string
};

export const filterTickets = (name: string): FilterTicketsActionType => ({
    type: FILTER_TICKETS,
    payload: name
});