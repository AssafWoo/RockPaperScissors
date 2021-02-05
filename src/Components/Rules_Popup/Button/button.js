import React from 'react';
import { Button } from './style';

export const RulesButton = ({ToggleRules}) => {
    return (
        <Button onClick={() => ToggleRules()}>
            Rules
        </Button>
    )
}

export default RulesButton;