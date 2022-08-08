import React from 'react';

type ObjectType = {
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
}

interface ITicketItem {
    data: ObjectType
}

const TicketItem: React.FC<ITicketItem> = ({ data }) => {
    const {origin, origin_name, destination, destination_name, departure_date, departure_time, arrival_date, arrival_time, carrier, stops, price} = data;

    const numWord = (value: number, words: Array<string>): string => {
        value = Math.abs(value) % 100;
        const lastNum = value  % 10;

        if (value > 10 && value < 20) return words[2]
        if (lastNum > 1 && lastNum < 5) return words[1]
        if (lastNum === 1) return words[0]

        return words[2]
    };

    const daysArr = ['пересадка', 'пересадки', 'пересадок'];
    let transplants = numWord(stops, daysArr);

    return (
        <li className="border py-2 px-4 flex rounded items-center mb-2 ticket">
            <div className="ticket__btn_block flex flex-col mr-5">
                <h3 className="ticket__title py-3">Turkish airlines</h3>
                <button className="ticket__btn">Купить за {price} р.</button>
            </div>
            <div className="ticket__info flex">
                <div className="ticket__from_block flex flex-col">
                    <div className="ticket__from_time text-3xl">{departure_time}</div>
                    <div className="ticket__from_name py-2">{origin} {origin_name}</div>
                    <div className="ticket__from_date text-sm">{departure_date}</div>
                </div>
                <div className="ticket__stops ml-5 mr-5 w-1/3">
                    {stops} {transplants}
                </div>
                <div className="ticket__to_block flex flex-col">
                    <div className="ticket__to_time text-3xl">{arrival_time}</div>
                    <div className="ticket__to_name py-2">{destination} {destination_name}</div>
                    <div className="ticket__to_date text-sm">{arrival_date}</div>
                </div>
            </div>
        </li>
    );
};

export default TicketItem;
