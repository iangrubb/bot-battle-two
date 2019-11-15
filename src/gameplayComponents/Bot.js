import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    width: 60px;

    margin: 10px;

    background: red;
    border-radius: 4px;

    color: white;
    font-size: 1.4em;

    display: flex;
    justify-content: center;
    align-items: center;

`

const Bot = props => {
    return (
        <Container>
            {props.number}
        </Container>
    )
}

export default Bot
