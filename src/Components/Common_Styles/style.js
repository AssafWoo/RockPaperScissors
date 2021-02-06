import styled from 'styled-components';


export const Background =  `linear-gradient(to right, hsl(237, 49%, 15%) 0%,hsl(214, 47%, 23%) 50%,hsl(237, 49%, 15%) 100%)`

// colors
export const ScissorsColor = `linear-gradient(hsl(40, 84%, 53%),hsl(39, 89%, 49%))`
export const PaperColor ='linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%))';
export const RockColor = `linear-gradient(hsl(349, 70%, 56%),hsl(349, 71%, 52%))`

export const DarkText = `hsl(229, 25%, 31%)`
export const ScoreText = `hsl(229, 64%, 46%)`
export const HeaderOutline = `hsl(217, 16%, 45%)`


// rippe effect
export const Ripple = `
animation: at-ripple 0.5s linear infinite;
overflow: hidden;
@keyframes at-ripple {
    0% {
        box-shadow: 0 12px 30px rgba(102, 102, 102, 0.1), 0 0 0 0 rgba(102, 102, 102, 0.1), 0 0 0 15px rgba(102, 102, 102, 0.1), 0 0 0 20px rgba(102, 102, 102, 0.1);
    }
    100% {
        box-shadow: 0 12px 30px rgba(102, 102, 102, 0.1), 0 0 0 20px rgba(102, 102, 102, 0.1), 0 0 0 30px rgba(102, 102, 102, 0.1), 0 0 0 60px rgba(102, 102, 102, 0);
    }
}
`

// options wrapper
export const PicksWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin-top:${props => props.last ? '0rem':'3rem'};
    .winner {
        ${Ripple}
    }
`

// option
export const SinglePick = styled.div`
    border-radius:50%;
    background:${props => {
        switch(props.color) {
            case "scissors":
                return ScissorsColor;
            case "paper":
                return PaperColor;
            case "rock":
                return RockColor;
        }
    }};
    border-bottom:${props => {
        switch(props.color) {
            case "scissors":
                return `7px solid #c08a2b`;
            case "paper":
                return `7px solid #36489a`;
            case "rock":
                return `7px solid #801e3c`;
        }
    }};
    text-align:center;
    pointer-events:${props => props.disabled ? 'none' :'auto'};
    height:${props => props.duel ? '5rem' : '5rem'};
    width:${props => props.duel ? '5rem' : '5rem'};
    padding:.5rem;
    margin:${props => props.last? '0rem 1rem 0rem 1rem' : '0rem 1rem 0rem 1rem'};
    cursor: pointer;
    @media screen and (min-width: 1366px){
        height:8rem;
        width:8rem;
        padding:1.2rem;
        margin:${props => props.last? '0rem 1rem 0rem 1rem' : '0rem 2rem 0rem 2rem'};
        height:${props => props.duel ? '11rem' : '9rem'};
        width:${props => props.duel ? '11rem' : '9rem'};
    }
    &:hover{
        ${Ripple}
    }

`
// inner image wrapper & img
export const ImageWrapper = styled.div`
    background:white;
    border-top:7px solid #e0e0e2;
    width:100%;
    height:90%;
    @media screen and (min-width: 1366px){
        width:100%;
        height:95%;
    }

    border-radius:50%;
    position:relative;

    img{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%, -50%);
        @media screen and (max-width: 1366px){
            width:2rem;
        }
    }
`

export const Body = styled.div`
@media screen and (min-width: 1366px){
    width:90%;
    margin-left:5%;
}
    margin:2rem;
`