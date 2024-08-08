// https://redux-toolkit.js.org/introduction/getting-started
// Redux toolkit is a standard way of writing Redux Logic
import { configureStore, ThunkAction, Action, Store } from '@reduxjs/toolkit';

// For adding any middleware to the store,
// append in the object middleware key with values in an array
// If not provided, configureStore will call getDefaultMiddleware
// and use the array of middleware functions it returns.

/**
 * The props of the configStore is deliberately kept as any,
 * however you will always get an object of all the reducers here.
 * The reducer in the configStore automatically puts in the
 * combineReducers from the redux utility.
 */
export const configStore = (props: any): Store => {
  const store = configureStore({
    reducer: props,
    devTools: true,
    /**
     * Enhancers, If defined as an array, these will be passed to the Redux compose function, and the combined enhancer will be passed to createStore.
     * This should not include applyMiddleware() or the Redux DevTools Extension composeWithDevTools, as those are already handled by configureStore.
     * Example: enhancers: [offline] will result in a final setup of [applyMiddleware, offline, devToolsExtension].
     */
  });
  return store;
};

export type ApplicationDispatch = (store: Store) => typeof store.dispatch;
export type ApplicationStateRoot = (
  store: Store
) => ReturnType<typeof store.getState>;
export type ApplicationThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ApplicationStateRoot,
  unknown,
  Action<string>
>;
