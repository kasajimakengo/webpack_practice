import ReactDom from 'react-dom';
import * as React from 'react';
import styled from 'styled-components';

import Alert from './Alert.tsx';

const AppContainer = styled.div`
  p {
    margin-bottom: 0.5em;
    font-weight: bold;
    color: green;
  }
`;

const App = (props) => {
  return (
    <AppContainer>
      <p>世の中金じゃ！</p>
      <Alert message="金をくれ！！！" />
    </AppContainer>
  );
};

const reactRoot = document.getElementById('react-root');
if (reactRoot) {
  ReactDom.render(<App />, reactRoot);
} else {
  console.log('No root element found');
}
