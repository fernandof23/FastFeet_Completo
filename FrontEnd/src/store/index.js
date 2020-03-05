import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import createStore from './createStore';
import persistReducers from './persisReducer';

import rootReducers from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
    process.env.NODE_ENV === 'development'
        ? console.tron.createSagaMonitor()
        : null;

const sagaMiddlewares = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddlewares];

const store = createStore(persistReducers(rootReducers), middleware);
const persistor = persistStore(store);

sagaMiddlewares.run(rootSaga);

export { store, persistor };
