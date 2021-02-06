import React, {useContext, useReducer, useState} from 'react';
import './App.css';
import ChooseYourPick from './Components/Main_Component/main';
import Store from './Context/context';
import Rules from './Components/Rules_Popup/Popup/popup';
import {Body} from './Components/Common_Styles/style';
import { usePersistedContext, usePersistedReducer } from "./Components/Hooks/usePersist";
import reducer from './Context/reducer/reducer';
import Header from './Components/Header/header';
import RulesButton from './Components/Rules_Popup/Button/button';
import DisplayDuel from './Components/Duel_Component/duel';


const UserInterface = {
  id:null,
  name:null,
  src:null
}

function App() {
  const [rules, setRules] = useState(false);
  const [myPick, setMyPick] =  useState(UserInterface);
  const [isPlaying, setIsPlaying] = useState(false);
  const globalStore = usePersistedContext(useContext(Store), "state");
 
  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state"
  );

  const handleClick = (element) => {
    setMyPick(prevState => ({...prevState, id:element?.id, name:element?.name, src:element?.src}));        
    setIsPlaying(true)
}

  const ToggleRules = () => setRules(!rules)



  return (
    <div className="App">
      <Store.Provider value={{state, dispatch}}>
        <Body>
          <Header />
          {isPlaying ? 
            <DisplayDuel setIsPlaying={setIsPlaying} handleClick={handleClick} myPick={myPick} />
            :
            <ChooseYourPick handleClick={handleClick} />
          }
          <RulesButton ToggleRules={ToggleRules} />
          {rules ? <Rules ToggleRules={ToggleRules}/> : ''}
        </Body>  
      </Store.Provider>
    </div>
  );
}

export default App;
