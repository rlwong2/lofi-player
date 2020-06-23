import React, { FunctionComponent, useState, useEffect } from "react";
import * as ReactDOM from 'react-dom';
import App from './components/app.jsx';
import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(
    <App />,
    document.getElementById('App')
  );

serviceWorker.register();
