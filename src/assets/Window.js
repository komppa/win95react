import React, { useEffect, useState } from 'react'
import { WindowWrapper } from '../components/window/WindowWrapper'
import { useDispatch } from 'react-redux'
import { destroyWindow } from '../reducer/windowReducer' 


const Window = (props) => {

    let lastPosX, lastPosY

    const [w, setW] = useState({
        x: props.x === undefined ? 0 : props.x,
        y: props.y === undefined ? 0 : props.y,
        z: props.z === undefined ? 0 : props.z,
        startx: 0,
        starty: 0,
    })

    useEffect(() => {
        lastPosX = props.x === undefined ? 0 : props.x
        lastPosY = props.y === undefined ? 0 : props.y
    }, [])


    const bringWindowFront = () => {
        // add usedispatch here
    }

    const startMouseTracking = (event) => {

        let mouseX = 0
        let mouseY = 0

        // If event.clienX and Y is undefined, it might not be the mouse moving, but touchmove
        if (event.touches) {
            // It is from touch
            mouseX = event.touches[0].clientX
            mouseY = event.touches[0].clientY
        } else {
            // It was from regular mouse
            mouseX = event.clientX
            mouseY = event.clientY
        }

        if (w.startx === 0 && w.starty === 0) {
            // Mouse's start position not yet binded
            setW(...{startx: mouseX, starty: mouseY})
        }

        if (w.lastPosX === 0 && w.lastPosY === 0) {
            // First time moving window, pay attention from which point mouse grabs
            setW(...{x: mouseX - w.startx, y: mouseY - w.starty})
        } else {
            // Not first time when moving window, know which was a last point
            setW(...{x: mouseX - w.startx + w.lastPosX, y: mouseY - w.state.starty + w.lastPosY})
        }  

    }

    const stopMouseTracking = (event) => {
        lastPosX = w.x
        lastPosY = w.y
        setW(...{startx: 0, starty: 0})
        window.removeEventListener("mousemove", startMouseTracking)
        window.removeEventListener("touchmove", startMouseTracking)
    }


    return (    
        <WindowWrapper
            position={{x: w.x, y: w.y, z: w.z}}
            onMouseDown={() => {
                bringWindowFront()  // Why this was here?
                window.addEventListener("mousemove", startMouseTracking)
                window.addEventListener("touchmove", startMouseTracking)
                window.addEventListener("mouseup", stopMouseTracking)
                window.addEventListener("touchend", stopMouseTracking)
            }}
            children={props.children}
            onMouseDownWindowWrapper={() => {
                bringWindowFront()
            }}
            title={props.title}
            height={props.height}
            width={props.width}
            id={props.id}
        />
    )

}

export default Window