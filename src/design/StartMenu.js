import React from 'react'
import styled from 'styled-components'
import { breakpoints } from './settings'

const Container = styled.div`
    background-color: #ccc;
    height: 500px;
    width: 300px;
    position: absolute;
    left: 0;
    bottom: 40px;

    display: flex;
    z-index: 1000;

    @media only screen and (max-width: ${breakpoints.maxWidth}) and (orientation: landscape) {
        bottom: 35px;
    }
    
`

const StartMenu = (props) => {
    return ( 
        <>
            { props.open ? <Container /> : null }
        </>
    )
}

export default StartMenu