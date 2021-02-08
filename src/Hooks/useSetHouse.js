import {useState, useEffect} from 'react';

const PICKS = [{id:1, name:"scissors", src:"../../../images/icon-scissors.svg"}, {id:2, name:'paper', src:"../../../images/icon-paper.svg"}, {id:3,name:'rock', src:"../../../images/icon-rock.svg"}]

const useSetHouse = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const index = PICKS.findIndex( x => x?.id === randomNumber);
    const [housePick, setHousePick] = useState({id:null, name:null,src:null});
    useEffect(() => { // create sort of dramatic tension
        setTimeout(() => {
            setHousePick({id:PICKS[index].id, name:PICKS[index].name,src:PICKS[index].src})
        }, 1000);
    },[])
    return housePick;
}

export default useSetHouse;