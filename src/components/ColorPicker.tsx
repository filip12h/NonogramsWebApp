import React from 'react';
import Select from 'react-select';
import cross from '../pics/cross.png';
import black from '../pics/black.png';
import blue from '../pics/blue.png';
import red from '../pics/red.png';
import green from '../pics/green.png';
import yellow from '../pics/yellow.png';
import orange from '../pics/orange.png';
import purple from '../pics/purple.png';
import grey from '../pics/grey.png';
import teal from '../pics/teal.png';

const options = [
    {
        value: 0,
        label: (
            <p>
                <img src={cross} width="30px" alt="crossed" />
                Cross
            </p>
        ),
    },
    {
        value: 1,
        label: (
            <p>
                <img src={black} alt="black" />
                Black
            </p>
        ),
    },
    {
        value: 2,
        label: (
            <p>
                <img src={blue} alt="blue" />
                Blue
            </p>
        ),
    },
    {
        value: 3,
        label: (
            <p>
                <img src={red} alt="red" />
                Red
            </p>
        ),
    },
    {
        value: 4,
        label: (
            <p>
                <img src={green} alt="green" />
                Green
            </p>
        ),
    },
    {
        value: 5,
        label: (
            <p>
                <img src={yellow} alt="yellow" />
                Yellow
            </p>
        ),
    },
    {
        value: 6,
        label: (
            <p>
                <img src={orange} alt="orange" />
                Orange
            </p>
        ),
    },
    {
        value: 7,
        label: (
            <p>
                <img src={purple} alt="purple" />
                Purple
            </p>
        ),
    },
    {
        value: 8,
        label: (
            <p>
                <img src={grey} alt="grey" />
                Grey
            </p>
        ),
    },
    {
        value: 9,
        label: (
            <p>
                <img src={teal} alt="teal" />
                Teal
            </p>
        ),
    },
];

type ColoPickerProps = {
    onChange: (i: number) => void;
};

const ColorPicker: React.FC<ColoPickerProps> = ({ onChange }) => {
    const changeColor = (e: any) => {
        onChange(e.value);
    };

    return (
        <>
            <Select
                options={options}
                className="colorPicker"
                onChange={changeColor}
                defaultValue={{
                    label: (
                        <p>
                            <img src={black} alt="black" />
                            Black
                        </p>
                    ),
                    value: 1,
                }}
            />
        </>
    );
};

export default ColorPicker;
