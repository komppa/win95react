import React from 'react'
import styled from 'styled-components'



const cross = require('../../images/cross.png')

const WindowTopBar = styled.div`
    height: 25px;
    width: 100%;
    background-color: ${props => props.selected ? '#01007F' : '#808080'};
`

const WindowTitleWrapper = styled.div`
    color: white;
    font-size: 10px;
    margin-left: 10px;
    line-height: 25px;  // Same as WindowTopBar's height
    font-weight: bold;
    float: left;
`

const WindowButtonWrapper = styled.div`
    height: 25px;
    width: 25px;
    background-color: ${props => props.selected ? '#01007F' : '#808080'};
    display: flex;
    img {
        margin: auto 2.5px auto auto;
        height: 20px;
    }
`

export const WindowTop = (props) => {

    return (
        <div style={{display: "flex"}}>

            <WindowTopBar 
                onMouseDown={() => props.onMouseDown()}
                onTouchStart={() => props.onMouseDown()}
                selected={props.selected}
            >
                <WindowTitleWrapper>
                    <h3>{props.title}</h3>
                </WindowTitleWrapper>
            </WindowTopBar>

            <WindowButtonWrapper
                selected={props.selected}
            >
                <img src={cross} alt="close" />
            </WindowButtonWrapper>
            
        </div>
    )
}