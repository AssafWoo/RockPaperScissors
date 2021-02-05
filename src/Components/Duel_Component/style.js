import styled from 'styled-components';


export const LabelsWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:89%;
    margin-left:6%;
    justify-content:center;
    margin-top:${props => props.last ? '0rem':'3rem'};
    @media screen and (min-width: 1366px){
        width:61%;
        margin-left:19%;    
    }
`

export const Label = styled.div`
    flex:1;
    justify-content:center;
    color:white;
    text-align:center;
    margin:1rem;
`
export const ResultsWrapper = styled.div`
    display:flex;
    position:relative;
    flex-wrap:wrap;
    flex-direction: column;
    transition: all 1s ease-out;
    @media screen and (max-width: 1366px){
        position:absolute;
        top:60%;
    }
`


export const Result = styled.h1`
    color:white;
    text-align:center;
    font-size: 3rem;
    margin-bottom: 1.2rem;
`


export const ResetButton = styled.button`
    border:none;
    background:white;
    padding:1rem 3rem;
    font-weight:600;
    border-radius:10px;
    color:hsl(349, 70%, 56%);
    cursor:pointer;
`
