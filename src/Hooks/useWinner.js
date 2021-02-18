import {useEffect, useState,useContext } from 'react';
import Store from '../Context/context';


// winner logic
export const useWinner = (housePick, myPick) => {
    const [ gameResult, setGameResult] = useState(false);
    const [ gameWinner, setGameWinner] = useState('');
    const [binaryWin, setBinaryWin] = useState(0);
    const { dispatch } = useContext(Store);

    
    useEffect(() => { 
        if((housePick?.id === 1 && myPick?.id === 3) || (housePick?.id === 2 && myPick?.id === 1) || (housePick?.id === 3 && myPick?.id === 2)) {
            dispatch({type:'SCORE_UP', payload:1})
            setGameWinner('You Win')
            setGameResult(true)
            setBinaryWin(1)
        }
        else if((housePick?.id === 1 && myPick?.id === 2) || (housePick?.id === 2 && myPick?.id === 3) || (housePick?.id === 3 && myPick?.id === 1)) { // scissors beats paper
            dispatch({type:'SCORE_DOWN', payload:1})
            setGameWinner('House Wins')
            setGameResult(true)
            setBinaryWin(0)
        }
        else if(housePick?.id === myPick?.id) {
            setGameWinner('Draw')
            setGameResult(true)
            setBinaryWin(2)
        }

    },[dispatch, housePick, myPick?.id])
    return { gameResult, gameWinner, binaryWin }
}