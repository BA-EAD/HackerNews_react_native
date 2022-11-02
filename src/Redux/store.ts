import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';

import rootReducers from './reducers';

export const store = createStore(rootReducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
