import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';

// Combine all reducers in one
import rootReducers from './reducers';

// redux create Store which handle in whole app and easily uses
// here need two parameter one create Reducer and AppluMiddleware handle any place dispatch and put data in store
export const store = createStore(rootReducers, applyMiddleware(thunk));

// create two type one is get data from Store and second is put data in store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
