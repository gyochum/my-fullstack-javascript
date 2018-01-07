import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    //type of element, any attributes for the element, children we want the element to have
    //React.createElement('h2', null, 'Hello There React'),
    <App />,
    document.getElementById('root')
);