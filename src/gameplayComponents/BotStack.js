import React from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

import Bot from './Bot'

const Container = styled.div`
    height: 200px;
    width: 80%;
    border: solid black 2px;
    border-radius: 4px;

    display: flex;
    align-items: center;
`

const BotStack = props => {

    return (
        <>
        <h1>Bot Stack</h1>
        <button onClick={props.popToQueue(props.stack)}>POP</button>
        <Container>
            {props.stack.map(bot => <Bot key={bot} number={bot} />)}
        </Container>
        </>
    )
}

const msp = state => {
    return {queue: state.botQueue , stack: state.botStack}
}

const mdp = dispatch => {
    return {popToQueue: stack => () => {
        if (stack.length > 0) {
            const stackLead = stack[stack.length - 1]
            dispatch({type: "POP"})
            dispatch({type: "ENQUEUE", bot: stackLead})
        }     
    }}
}

export default connect(msp, mdp)(BotStack)
