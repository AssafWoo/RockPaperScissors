import React, { Fragment } from 'react';
import { ResultsWrapper, Result, ResetButton} from './style';
import {PicksWrapper, SinglePick, ImageWrapper} from '../Common_Styles/style';
import { useWinner } from '../Hooks/useWinner';
import useSetHouse from '../Hooks/useSetHouse';


const DisplayDuel = ({handleClick, myPick, setIsPlaying}) => {
    const housePick = useSetHouse();
    const {gameResult, gameWinner, binaryWin} = useWinner(housePick, myPick);

    return (
        <Fragment>
            {gameResult ? 
            <PicksWrapper>
                <SinglePick className={binaryWin === 1 ? 'winner': ''} disabled duel color={myPick.name} name={myPick} onClick={(e) => handleClick(e.target.name)}>
                    <ImageWrapper><img alt="your-pick" src={myPick.src} /></ImageWrapper>
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
                            <ImageWrapper ><img alt="house-pick" src={housePick.src} /></ImageWrapper>
                        </SinglePick> :''}
            </PicksWrapper> : <Result>Drums Noises...</Result>
            }
        </Fragment>

    )
}

export default DisplayDuel;