import styled from 'styled-components';

export const Button = styled.button`
    padding:1rem;
    border:1px solid #eee;
    border-radius:20px;
    background-color:transparent;
    text-align:center;
    position:absolute;
    color:white;
    right:1rem;
    top:90vh;


    @media screen and (max-width: 1366px){
        top:100%;
        right:0;
        left:50%;
        transform:translate(-50%, -90%);
    }
`