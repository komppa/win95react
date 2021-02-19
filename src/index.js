import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension'
import './index.css';
import { W95 } from './W95';
import * as serviceWorker from './serviceWorker';
import './fonts/w95.ttf'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { windowReducer, createWindow } from './reducer/windowReducer'
import { startMenuReducer } from './reducer/startMenuReducer'


const reducer = combineReducers({
  windowReducer,
  startMenuReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools()
)


const testWindows = [
    {
        title: 'First window',
        content: 'This is first window\'s text',
    },
    {
        title: 'Second window',
        content: 'Second window\'s content',
    },
    {
        title: 'Third window',
        content: 'Third window\'s content',
    }
]


for (let i = 0; i < testWindows.length; i++) {
    console.log("for", testWindows[i].title)
    store.dispatch(createWindow(testWindows[i]))
}


ReactDOM.render(
    <Provider store={store}>
        <W95 />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();