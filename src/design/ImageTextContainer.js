import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    
    display: flex;
    img {
        height: 30px;
    }
    h5 {
        margin-left: 5px;
        font-size: 15px;
        font-align: center;
        line-height: 30px;
        font-weight: ${props => props.onBold ? 'bold' : 'normal'};
    }

`

const ImageTextContainer = ({onBold, img_src, img_alt, text}) => {
    return (
        <Container onBold={onBold} >
            <img src={img_src} alt={img_alt} />
            <h5>{ text }</h5>
        </Container>
    )
}

export default ImageTextContainer
