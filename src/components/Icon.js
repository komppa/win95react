import React from 'react'

const Icon = (props) => {

    const icon_s = {
        height: "75px", 
        width: "75px",
        margin: "2vw 2vw 3vw 2vw",
        position: "relative",
    }

    const img_wrapper_s = {
        width: "100%",
        height: "100%",
        float: "top",
    }

    const icon_img_s = {
        width: "100%",
        height: "100%",
    }

    return (
        <div style={icon_s} onClick={() => props.onClick(props.text)}>
            <div style={img_wrapper_s}>
                <img style={icon_img_s} src={props.img} alt={props.alt}></img>
            </div>
            <div style={{position: "absolute", textAlign: "center", width: "75px",}}>
                <div style={{textAlign: "center", fontSize: "15px", color: "white",}}>
                    {props.text}
                </div>
            </div>
            
            
        </div>
    )
}


export default Icon
