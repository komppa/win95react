import React from 'react'
import Button from '../components/Button'
import { buttons } from './settings'
import ImageTextContainer from './ImageTextContainer'


const gh_icon = require('../images/icons/gh.png')

const Task = ({onMouseDown, onMouseUp, img_src, img_alt, text, pressed}) => {
    return ( 
        <Button
            sizes={buttons.task}
            img_src={img_src}
            img_alt={img_alt}
            text={text}
            pressed={pressed}
            onMouseDown={() => onMouseDown()}
            onMouseUp={() => onMouseUp()}
        >
            <ImageTextContainer
                onBold={false}
                img_src={gh_icon}
                img_alt="start"
                text="Start"
            /> 
        </Button>
    )
}

export default Task