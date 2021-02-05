import React, {useContext, useReducer} from 'react';
import './App.css';
import ChooseYourPick from './Components/Main_Component/main';
import Store from './Context/context';
import { usePersistedContext, usePersistedReducer } from "./Components/Hooks/usePersist";
import reducer from './Context/reducer/reducer';


function App() {

  const globalStore = usePersistedContext(useContext(Store), "state");

  const [state, dispatch] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state"
  );


  return (
    <div className="App">
      <Store.Provider value={{state, dispatch}}>
        <ChooseYourPick />  
      </Store.Provider>
    </div>
  );
}

export default App;
