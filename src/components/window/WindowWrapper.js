import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import { WindowTop } from './WindowTop'
import { buttons } from '../../design/settings'


const WindowContainer = styled.div`
    position: absolute;
    left: ${props => props.position.x}px;
    top: ${props => props.position.y}px;
    z-index: ${props => props.position.z};
`

// Should this component adapt if props.height and width are defined?
const WindowContainerWrapper = styled.div`
    height: calc(100% - 25px);
    width: 100%;
    margin: auto;
`

export const WindowWrapper = (props) => {

    return (
        <WindowContainer
            position={props.position}
            onMouseDown={() => props.onMouseDownWindowWrapper()}
        >
            <Button
                sizes={buttons.window}
            >
                <WindowTop
                    onMouseDown={() => props.onMouseDown()}
                    selected={props.position.z === 0 ? true : false}    // TODO remove 0 (old topZ)
                    title={props.title}
                    id={props.id}
                />

                <WindowContainerWrapper>
                    { props.children }
                </WindowContainerWrapper>

            </Button>

        </WindowContainer>
    )
} 