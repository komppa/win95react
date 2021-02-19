import React from 'react'
import Button from '../components/Button'
import { buttons } from './settings'
import ImageTextContainer from './ImageTextContainer'


const start_icon = require('../images/start.png')

const StartMenuButton = ({onMouseDown, onMouseUp, pressed}) => {
    return (
        <Button
            sizes={buttons.startMenu}
            img_alt="start"
            text="Start"
            pressed={pressed}
            onMouseDown={() => onMouseDown()}
            onMouseUp={() => onMouseUp()}
        >
            <ImageTextContainer
                onBold={true}
                img_src={start_icon}
                img_alt="start"
                text="Start"
            /> 
        </Button>
    )
}

export default StartMenuButton