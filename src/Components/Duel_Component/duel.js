import React, { Fragment, useEffect, useState } from 'react';
import { ResultsWrapper, Result, ResetButton} from './style';
import {PicksWrapper, SinglePick, ImageWrapper} from '../Common_Styles/style';
import { useWinner } from '../Hooks/useWinner';

const PICKS = [{id:1, name:"scissors", src:"../../../images/icon-scissors.svg"}, {id:2, name:'paper', src:"../../../images/icon-paper.svg"}, {id:3,name:'rock', src:"../../../images/icon-rock.svg"}]


const DisplayDuel = ({handleClick, myPick, setIsPlaying}) => {
    // generate random numbder to pick an option from the PICKS array
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const index = PICKS.findIndex( x => x?.id === randomNumber);

    const [housePick, setHousePick] = useState({id:null, name:null,src:null});
    const {gameResult, gameWinner, binaryWin} = useWinner(housePick, myPick);

    useEffect(() => { // create sort of dramatic tension
        setTimeout(() => {
            setHousePick({id:PICKS[index].id, name:PICKS[index].name,src:PICKS[index].src})
        }, 1000)
    },[])

    return (
        <Fragment>
            {gameResult ? 
            <PicksWrapper>
                <SinglePick className={binaryWin === 1 ? 'winner': ''} disabled duel color={myPick.name} name={myPick} onClick={(e) => handleClick(e.target.name)}>
                    <ImageWrapper><img src={myPick.src} /></ImageWrapper>
                </SinglePick>
                    <ResultsWrapper>
                        <Result>
                            {gameWinner}
                        </Result>
                        <ResetButton onClick={() => setIsPlaying(false)}>
                            PLAY AGAIN
                        </ResetButton>
                    </ResultsWrapper> 
                    {housePick.name !== null ? 
                        <SinglePick className={binaryWin === 0 ? 'winner': ''} disabled duel color={housePick.name} name={housePick} onClick={(e) => handleClick(e.target.name)}>
                            <ImageWrapper ><img src={housePick.src} /></ImageWrapper>
                        </SinglePick> :''}
            </PicksWrapper> : <Result>Drums Noises...</Result>
            }
        </Fragment>

    )
}

export default DisplayDuel;