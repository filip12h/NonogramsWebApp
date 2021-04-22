import React, { useState } from 'react';
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

type ColoPickerProps = {
    onChange: (i: number) => void;
    pickedColor: number;
    colorsUsed: string;
};

const ColorPicker: React.FC<ColoPickerProps> = ({ onChange, pickedColor, colorsUsed }) => {
    const [color, changePick] = useState(pickedColor);
    const changeColor = (e: any) => {
        onChange(e);
        changePick(e);
    };

    return (
        <>
            <div className="colorPicker">
                {colorsUsed.includes('0') && (
                    <button
                        type="button"
                        value="0"
                        id="0"
                        onClick={() => changeColor(0)}
                        className={`${color === 0 ? 'picked' : ''}`}
                    >
                        <img src={cross} width="30px" alt="crossed" />
                    </button>
                )}
                {colorsUsed.includes('1') && (
                    <button
                        type="button"
                        value="1"
                        id="1"
                        onClick={() => changeColor(1)}
                        className={`${color === 1 ? 'picked' : ''}`}
                    >
                        <img src={black} width="30px" alt="black" />
                    </button>
                )}
                {colorsUsed.includes('2') && (
                    <button
                        type="button"
                        value="2"
                        id="2"
                        className={`${color === 2 ? 'picked' : ''}`}
                        onClick={() => changeColor(2)}
                    >
                        <img src={blue} width="30px" alt="blue" />
                    </button>
                )}
                {colorsUsed.includes('3') && (
                    <button
                        type="button"
                        value="3"
                        id="3"
                        className={`${color === 3 ? 'picked' : ''}`}
                        onClick={() => changeColor(3)}
                    >
                        <img src={red} width="30px" alt="red" />
                    </button>
                )}
                {colorsUsed.includes('4') && (
                    <button
                        type="button"
                        value="4"
                        id="4"
                        className={`${color === 4 ? 'picked' : ''}`}
                        onClick={() => changeColor(4)}
                    >
                        <img src={green} width="30px" alt="green" />
                    </button>
                )}
                {colorsUsed.includes('5') && (
                    <button
                        type="button"
                        value="5"
                        id="5"
                        className={`${color === 5 ? 'picked' : ''}`}
                        onClick={() => changeColor(5)}
                    >
                        <img src={yellow} width="30px" alt="yellow" />
                    </button>
                )}
                {colorsUsed.includes('6') && (
                    <button
                        type="button"
                        value="6"
                        id="6"
                        className={`${color === 6 ? 'picked' : ''}`}
                        onClick={() => changeColor(6)}
                    >
                        <img src={orange} width="30px" alt="orange" />
                    </button>
                )}{' '}
                {colorsUsed.includes('7') && (
                    <button
                        type="button"
                        value="7"
                        id="7"
                        className={`${color === 7 ? 'picked' : ''}`}
                        onClick={() => changeColor(7)}
                    >
                        <img src={purple} width="30px" alt="purple" />
                    </button>
                )}{' '}
                {colorsUsed.includes('8') && (
                    <button
                        type="button"
                        value="8"
                        id="8"
                        className={`${color === 8 ? 'picked' : ''}`}
                        onClick={() => changeColor(8)}
                    >
                        <img src={grey} width="30px" alt="grey" />
                    </button>
                )}{' '}
                {colorsUsed.includes('9') && (
                    <button
                        type="button"
                        value="9"
                        id="9"
                        className={`${color === 9 ? 'picked' : ''}`}
                        onClick={() => changeColor(9)}
                    >
                        <img src={teal} width="30px" alt="teal" />
                    </button>
                )}
            </div>
        </>
    );
};

export default ColorPicker;
