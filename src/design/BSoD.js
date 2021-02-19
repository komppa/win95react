import React from 'react'

const BSoD_img = require('../images/BSoD.png')

const BSoD = () => {

    const bsod_s = {
        zIndex: 1000,
        position: "absolute",
        height: "100vh", 
        width: "100vw",
        backgroundColor: "#0000aa",
        display: "flex",
    }

    const bsod_img_s = {
        height: "70%",
        margin: "auto",
    }

    return (
        <div style={bsod_s}>
            <img src={BSoD_img} alt="BSoD" style={bsod_img_s}></img>
        </div>
    )
}

export default BSoD