import styled from 'styled-components';
import { DarkText } from '../../Common_Styles/style';

export const Popup = styled.div`   
    position: fixed;  
    width: 100vw;  
    height: 100vh;  
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    margin: auto;  
    background-color: rgba(0,0,0, 0.5);  
  `

export const InnerPopup = styled.div `  
    position: absolute;  
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    padding:2rem;
    margin: auto;  
    border-radius: 10px;  
    background: white; 
    @media screen and (max-width: 1366px){
      width: 50%;  
      height: 37%;  
    }  
  `

  export const PopupHeader = styled.div`
    display:flex;
    flex-wrap:wrap;

  `
  export const Header = styled.h1`
    flex:1;
    color:${DarkText};
    margin-top:0;
    margin-top:-13px;
    @media screen and (max-width: 1366px){
       font-size:1.2rem;
       position:absolute;
       left:50%;
       transform:translate(-50%) 
    } 
  `
    export const CloseButton = styled.div`
    flex:1;
    border: none;
    background: transparent;
    text-align: right;
    @media screen and (max-width: 1366px){
        width: 100%; 
        position:absolute;
        top:95%;
        left:50%;
        transform:translate(-95%, -50%);
        padding-bottom:1.2rem;
      } 
    img {
      cursor: pointer;
    }
  `
  export const RulesWrapper = styled.div`
    img {
      @media screen and (max-width: 1366px){
        width: 100%;
        margin-top:2rem;  
      } 
    }
  `