import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
const title='React with webpack and babel';
ReactDom.render(
   <App title={title}/>,
    document.getElementById('app')
);

