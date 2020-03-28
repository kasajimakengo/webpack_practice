import ReactDom from 'react-dom';
import * as React from 'react';
import styled from 'styled-components';

import Alert from './Alert.tsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
import FlatButton from 'material-ui/FlatButton';

const App = (props) => {
  return (
    <MuiThemeProvider>
      <FlatButton onClick={okadaStart} id="okada-start" label="突然のちんちんタイム" style={{textAlign: 'left'}}/>
    </MuiThemeProvider>
  );
};

const reactRoot = document.getElementById('okada-time');
if (reactRoot) {
  ReactDom.render(<App />, reactRoot);
} else {
  console.log('No okada element found');
}

function okadaStart(e) {
  e.preventDefault();
  alert('ちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちんちん');
  console.log('The link was clicked.');
}
