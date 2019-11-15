import React from 'react';

import { connect } from 'react-redux';

import styled from 'styled-components';

import BotStack from './gameplayComponents/BotStack';
import BotQueue from './gameplayComponents/BotQueue';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`


const App = props => {
  return (
    <Page>
      <BotStack />
      <BotQueue />
    </Page>
  );
}

const msp = state => {
  return {}
}

const mdp = dispatch => {
  return {}
}

export default connect(msp, mdp)(App);
