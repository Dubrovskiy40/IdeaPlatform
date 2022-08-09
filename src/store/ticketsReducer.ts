import {
    GET_TICKETS,
    FILTER_TICKETS,
} from './types/ticketsTypes';
import {ActionsTypes} from "../actions/ticketsAction";

export type InitialStateTicketsReducerArrayType = {
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

const initialState: Array<InitialStateTicketsReducerArrayType> = [];

const ticketsReducer = (state = initialState, { type, payload }: ActionsTypes): Array<InitialStateTicketsReducerArrayType> => {
    switch (type) {
        case GET_TICKETS:
            return [...payload.sort((a, b) => a.price > b.price ? 1 : -1)];

        case FILTER_TICKETS:
            if (payload === 'zero') {
                return [...state.filter((ticket) => ticket.stops === 0)]
            } else if (payload === 'one') {
                return [...state.filter((ticket) => ticket.stops === 1)]
            } else if (payload === 'two') {
                return [...state.filter((ticket) => ticket.stops === 2)]
            } else if (payload === 'three') {
                return [...state.filter((ticket) => ticket.stops === 3)]
            }
            return [...state]

        default:
            return state;
    }
};

export default ticketsReducer;