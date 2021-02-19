import React, { useEffect } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../design/settings'

const bs = "2px"  // border size

const ButtonInner = styled.div`

    background-color: #c0c0c0;
    height: calc(100% - ${bs} * 2);
    width: calc(100% - ${bs} * 2);
    margin: auto;
    position: relative;
    border-top: ${bs} solid ${props => props.buttonDown ? "#808080" : "#dfdfdf"};
    border-right: ${bs} solid ${props => props.buttonDown ? "#dfdfdf" : "#808080"};
    border-bottom: ${bs} solid ${props => props.buttonDown ? "#dfdfdf" : "#808080"};
    border-left: ${bs} solid ${props => props.buttonDown ? "#808080" : "#dfdfdf"};

`

const ButtonOuter = styled.div`

    height: 100%;
    width: 100%;
    border-top: ${bs} solid ${props => props.buttonDown ? "black" : "white"};
    border-right: ${bs} solid ${props => props.buttonDown ? "white" : "black"};
    border-bottom: ${bs} solid ${props => props.buttonDown ? "white" : "black"};
    border-left: ${bs} solid ${props => props.buttonDown ? "black" : "white"};
    
`

const ButtonWrapper = styled.div`

    height: ${props => props.sizes.height};
    width: ${props => props.sizes.width};
    margin: auto 5px auto 2.5px;
    @media only screen and (max-width: ${breakpoints.maxWidth}) {
        width: ${props => props.sizes.widthOnMobilePortrait};
    }
    @media only screen and (max-width: ${breakpoints.maxWidth}) and (orientation: landscape) {
        width: ${props => props.sizes.widthOnMobileLandscape};
    }

`


const Button = (props) => {

    // Check if button is selected from props
    useEffect(() => {
        if (props.selected) {
            // setButtonDown(props.selected)
        }
    }, [props.selected])

    const handleButtonPress = (pressed) => {
        // If this button is capable of pressing 
        if (props.onMouseDown && props.onMouseUp) {
            // setButtonDown(pressed)
            // Has button been pressed down or up
            if (pressed) {  
                props.onMouseDown()
            } else {
                props.onMouseUp()
            }
        }
    }

    return (
        <ButtonWrapper
            sizes={props.sizes} 
            onMouseDown={() => handleButtonPress(true)}
            onTouchStart={() => handleButtonPress(true)}
            onMouseUp={() => handleButtonPress(false)}
            onTouchEnd={() => handleButtonPress(false)}
        >
            <ButtonOuter buttonDown={props.pressed} >
                <ButtonInner buttonDown={props.pressed} >
                    { props.children }
                </ButtonInner>
            </ButtonOuter>
        </ButtonWrapper>
    )
}

export default Button