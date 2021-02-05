import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    border:3px solid #eee;
    border-radius:20px;
    padding:1rem;
    background-color:transparent;

`
export const Score = styled.div`
    flex:1;
    text-align:right;

`
export const ScoreContent = styled.div`
    background:white;
    border-radius:8px;
    width:fit-content;
    padding:1rem;
    text-align:center;
    float:right;
    cursor: pointer;
    span {
        font-size:1rem;
        color:hsl(229, 64%, 46%);
        font-weight:600;
    }
    h4 {
        font-size:2.5rem;
        margin:0;
        color: hsl(229, 25%, 31%);
    }

`
export const Heading = styled.div`
    flex:1;
    text-align:left;
    img{
        @media screen and (max-width: 1366px){
            width:9rem;
        }
    }
    
`