import React from 'react';
import {Popup, InnerPopup, RulesWrapper,Header, PopupHeader, CloseButton} from './style';

const Rules = ({ToggleRules}) => {
    return(
        <Popup>
            <InnerPopup>
                <PopupHeader>
                    <Header>
                        Rules
                    </Header>
                    <CloseButton onClick={()=>ToggleRules()}>
                    <img src="../../../images/icon-close.svg" />
                    </CloseButton>
                </PopupHeader>
                <RulesWrapper>
                    <img src="../../../images/image-rules.svg" />
                </RulesWrapper>
            </InnerPopup>
        </Popup>
    )
}

export default Rules;