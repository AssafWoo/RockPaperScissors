import React, {useContext, useReducer, useState} from 'react';
import './App.css';
import ChooseYourPick from './Components/userOptions/userOptions';
import Store from './Context/context';
import Rules from './Components/rules/Popup/popup';
import {Body} from './Components/styles/style';
import { usePersistedContext, usePersistedReducer } from "./Hooks/usePersist";
import reducer from './Context/reducer/reducer';
import Header from './Components/header/header';
import RulesButton from './Components/rules/Button/button';
import DisplayDuel from './Components/duel/duel';


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
