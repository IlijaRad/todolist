<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList/TodoList';
import './index.css'

const App = () => {
    return (
        <div className="container">
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> d000b82... Switched to hooks / Added Validation
