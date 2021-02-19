import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { buttons } from '../design/settings'

const cross = require('../images/cross.png')

var topZ = 0

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

const WindowTop = (props) => {
    
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

            <WindowButtonWrapper selected={props.selected}>
                <img src={cross} alt="close" />
            </WindowButtonWrapper>
            
        </div>
    )
}


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

const WindowWrapper = (props) => {

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
                    selected={props.position.z === topZ ? true : false}
                    title={props.title}
                />

                <WindowContainerWrapper>
                    { props.children }
                </WindowContainerWrapper>

            </Button>

        </WindowContainer>
    )
} 

class Window extends React.Component {

    constructor(props) {
        
        super(props)

        this.lastPosX = props.x === undefined ? 0 : props.x
        this.lastPosY = props.y === undefined ? 0 : props.y

        this.state = {
            x: props.x === undefined ? 0 : props.x,
            y: props.y === undefined ? 0 : props.y,
            z: props.z === undefined ? 0 : props.z,
            startx: 0,
            starty: 0,
        }

        this.startMouseTracking = this.startMouseTracking.bind(this)
        this.stopMouseTracking = this.stopMouseTracking.bind(this)

    }

    bringWindowFront() {
        topZ = topZ + 1
        this.setState({z: topZ})
    }

    startMouseTracking = (event) => {

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

        if (this.state.startx === 0 && this.state.starty === 0) {
            // Mouse's start position not yet binded
            this.setState({startx: mouseX})
            this.setState({starty: mouseY})
        }

        if (this.lastPosX === 0 && this.lastPosY === 0) {
            // First time moving window, pay attention from which point mouse grabs
            this.setState({x: mouseX - this.state.startx})   
            this.setState({y: mouseY - this.state.starty})
        } else {
            // Not first time when moving window, know which was a last point
            this.setState({x: mouseX - this.state.startx + this.lastPosX})
            this.setState({y: mouseY - this.state.starty + this.lastPosY})
        }  

    }

    stopMouseTracking = (event) => {
        this.lastPosX = this.state.x
        this.lastPosY = this.state.y
        this.setState({startx: 0, starty: 0})
        window.removeEventListener("mousemove", this.startMouseTracking)
        window.removeEventListener("touchmove", this.startMouseTracking)
    }

    componentDidMount() {

    }   

    render() {
        return (    
            <WindowWrapper
                position={{x: this.state.x, y: this.state.y, z: this.state.z}}
                onMouseDown={() => {
                    this.bringWindowFront()  // Why this was here?
                    window.addEventListener("mousemove", this.startMouseTracking)
                    window.addEventListener("touchmove", this.startMouseTracking)
                    window.addEventListener("mouseup", this.stopMouseTracking)
                    window.addEventListener("touchend", this.stopMouseTracking)
                }}
                children={this.props.children}
                onMouseDownWindowWrapper={() => {
                    this.bringWindowFront()
                }}
                title={this.props.title}
                height={this.props.height}
                width={this.props.width}
            />
        )
    }

}

export default Window