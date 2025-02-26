const React = require('react');
const ReactDOM = require('react-dom/client');
require('./output.css');
const App = require('./App');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(React.StrictMode, null, React.createElement(App))
);

