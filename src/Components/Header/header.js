import React, { useContext } from 'react';
import Store from '../../Context/context';
import { Heading, Wrapper, Score, ScoreContent } from './style';

const Header = () => {
    const { state } = useContext(Store);

    return (
        <Wrapper>
            <Heading>
                <img alt="logo" src="../../../images/logo.svg" />
            </Heading>
            <Score>
                <ScoreContent>
                    <span>Score</span>
                    <h4>{state.score}</h4>
                </ScoreContent>
            </Score>
        </Wrapper>
    )
}

export default Header;