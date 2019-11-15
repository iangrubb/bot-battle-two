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
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
`

const BotQueue = props => {

    return (
        <>
        <h1>Bot Queue</h1>
        <button onClick={props.moveToStack(props.queue)}>PUSH</button>
        <button onClick={props.returnToQue(props.queue)}>REQUEUE</button>
        <Container>
            {props.queue.map(bot => <Bot key={bot} number={bot} />)}
        </Container>
        </>
    )
}

const msp = state => {

    return {queue: state.botQueue, stack: state.botStack}
}

const mdp = dispatch => {
    return {
        moveToStack: queue => () =>  {
            if (queue.length > 0) {
                const queueLead = queue[0]
                dispatch({type: "DEQUEUE"})
                dispatch({type: "PUSH", bot: queueLead})
            }   
        },
        returnToQue: queue => () => {
            if (queue.length > 0) {
                const queueLead = queue[0]
                dispatch({type: "DEQUEUE"})
                dispatch({type: "ENQUEUE", bot: queueLead})
            }
        }
    }
}

export default connect(msp, mdp)(BotQueue)