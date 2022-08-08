import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TicketsList from "./components/TicketsList/TicketsList";
import InputCheckbox from "./components/InputCheckbox/InputCheckbox";
import {filterTickets, getTickets} from "./actions/ticketsAction";
import {useDispatch} from "react-redux";
import ticketsJson from './local-json/tickets.json';

function App() {
    const dispatch = useDispatch();
    const [transplantsState, setTransplantsState] = useState({
        all: false,
        zero: false,
        one: false,
        two: false,
        three: false,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (value) {
            dispatch(getTickets(ticketsJson.tickets))
            dispatch(filterTickets(name));
        }

        setTransplantsState({
            all: false,
            zero: false,
            one: false,
            two: false,
            three: false,
            [name]: value
        });
    }

    return (
        <div className="container flex mx-auto max-w-3xl pt-5">
            <div>
                <h2 className="mb-5">Валюта</h2>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained">RUB</Button>
                    <Button variant="contained">USD</Button>
                    <Button variant="contained">EUR</Button>
                </Stack>
                <h2 className="mt-5">Количество пересадок</h2>
                <Box className="flex flex-col">
                    <InputCheckbox id="chk-all" label='Все' onChange={handleInputChange} checked={transplantsState.all}
                                   name='all'/>
                    <InputCheckbox id="chk-zero" label='Без пересадок' onChange={handleInputChange}
                                   checked={transplantsState.zero} name='zero'/>
                    <InputCheckbox id="chk-one" label='1 пересадка' onChange={handleInputChange}
                                   checked={transplantsState.one} name='one'/>
                    <InputCheckbox id="chk-two" label='2 пересадки' onChange={handleInputChange}
                                   checked={transplantsState.two} name='two'/>
                    <InputCheckbox id="chk-three" label='3 пересадки' onChange={handleInputChange}
                                   checked={transplantsState.three} name='three'/>
                </Box>
            </div>
            <TicketsList />
        </div>
    );
}

export default App;
