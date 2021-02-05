import React, { useState } from 'react';
import Header from '../Header/header';
import { Body } from './style';
import Rules from '../Rules_Popup/Popup/popup';
import RulesButton from '../Rules_Popup/Button/button';
import DisplayDuel from '../Duel_Component/duel';
import UserPick from '../User_Options/options';


const ChooseYourPick = () => {
    const [rules, setRules] = useState(false);
    const [myPick, setMyPick] =  useState({id:null, name:null, src:null});
    const [isPlaying, setIsPlaying] = useState(false);

    const ToggleRules = () => setRules(!rules)

    const handleClick = (element) => {
        setMyPick(prevState => ({...prevState, id:element?.id, name:element?.name, src:element?.src}));        
        setIsPlaying(true)
    }

    return (
        <Body>
            <Header />
            {isPlaying ?
                <DisplayDuel setIsPlaying={setIsPlaying} handleClick={handleClick} myPick={myPick} />
            : 
                <UserPick handleClick={handleClick} />
            }
            <RulesButton ToggleRules={ToggleRules} />
            {rules ? <Rules ToggleRules={ToggleRules}/> : ''}
        </Body>
    )
}

export default ChooseYourPick;