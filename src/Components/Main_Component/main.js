import React from 'react';
import UserPick from '../User_Options/options';


const ChooseYourPick = ({handleClick}) => {

    const clickHandler = (element) => {
        handleClick(element)
    }

    return (
        <UserPick handleClick={clickHandler} />
    )
}

export default ChooseYourPick;