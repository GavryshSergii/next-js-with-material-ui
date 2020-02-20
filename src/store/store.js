import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer, { exampleInitialState } from './reducer'
import rootSaga from './saga'

// const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
// const bindMiddleware = middleware => composeEnhancers(applyMiddleware(...middleware));
// const bindMiddleware = middleware => composeWithDevTools(applyMiddleware(...middleware));

// const bindMiddleware = middleware => applyMiddleware(...middleware);

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
};

const initStore = (initialState = exampleInitialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default initStore;
