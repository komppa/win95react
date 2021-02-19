import React from 'react'
import Desktop from './design/Desktop'
import Icon from './components/Icon'
import Window from './assets/Window'

// Assets
import { TaskbarContainer } from './design/TaskbarContainer'
import StartMenuButton from './design/StartMenuButton'
import Task from './design/Task'
import { useSelector } from 'react-redux'

// Images
const github = require('./images/icons/gh.png');


const W95 = () => {

    const windows = useSelector(state => state.windowReducer)
    // const startMenuOpen = useSelector(state => state.startMenuReducer)

    return (
        <div style={{backgroundColor: "#008080", height: "100%", width: "100%", position: "absolute", overflow: "hidden"}}>
        
            <Desktop>

                <Icon
                    text="GitHub" 
                    img={github}
                    alt="github"
                    onClick={() => window.open("https://github.com/komppa/")}
                />

                {
                    windows.map(window => 
                        <Window
                            id={window.id}
                             title={window.title}
                            x={window.y}
                            y={window.x}
                            z={window.z}
                        >
                            {window.content}
                        </Window>
                    )
                }


            </Desktop>

            <TaskbarContainer>

                <StartMenuButton 
                    onMouseDown={() => null}
                    onMouseUp={() => null}
                    pressed={false}
                />

                <Task
                    onMouseDown={() => null}
                    onMouseUp={() => null}
                    img_src={require('./images/icons/gh.png')}
                    img_alt="github"
                    text="GitHub" 
                />

            </TaskbarContainer>   

        </div>  
    )

}

export {
    W95
}
