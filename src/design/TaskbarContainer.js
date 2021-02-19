import styled from 'styled-components'
import { breakpoints } from './settings'

export const TaskbarContainer = styled.div`

    height: 40px;
    width: 100%;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    display: flex;
    z-index: 1000;


    @media only screen and (max-width: ${breakpoints.maxWidth}) and (orientation: landscape) {
        height: 35px;
    }
    
`