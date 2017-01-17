import * as redux from 'redux';
import thunk from 'redux-thunk';
import * as reducers from 'reducers';

export const INITIAL_STATE = {};

export default function (initalState = {}) {
  const reducer = redux.combineReducers({...reducers});
  const store = redux.createStore(
    reducer,
    initalState,
    redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension(): x => x
    )
  );

  return store;
}
