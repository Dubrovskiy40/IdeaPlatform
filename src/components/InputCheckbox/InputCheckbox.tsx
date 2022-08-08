import React from 'react';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

type Props = {
    id: string,
    label: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    checked: boolean,
    name: string
}

const InputCheckbox = ({ id, label, onChange, checked, name }: Props) => {

    return (
        <FormControlLabel control={<Checkbox id={id} onChange={onChange} checked={checked} name={name} />} label={label} />
    );
};

export default InputCheckbox;
