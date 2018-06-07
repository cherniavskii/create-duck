# create-duck
CLI script for creating [Redux ducks](https://github.com/erikras/ducks-modular-redux).
Uses [redux-logic](https://github.com/jeffbski/redux-logic) middleware and [reselect](https://github.com/reduxjs/reselect) (optionally).

Generates duck file, which can be modified/extended with extra types/actions/logic.

## Motivation
Created for personal needs to avoid writing boilerplate code over and over.

## Usage
Install NPM package globally:
```
npm i -g create-duck
```
Run `create-duck` command. You will be prompted to enter:
- duck name
- duck destination path
- whether to use 'reselet' for selectors or not

:warning: Remember to import reducer/logic from duck and add them to root reducer/logic.

## Example
Running `create-duck` command and entering `user-data` as duck name will generate in current working directory `user-data.js` file with following content:
```
import { createLogic } from 'redux-logic';

/*
 * TYPES
 */

const prefix = 'userData/';

const FETCH_USER_DATA = `${prefix}FETCH_USER_DATA`;
const FETCH_USER_DATA_SUCCESS = `${prefix}FETCH_USER_DATA_SUCCESS`;
const FETCH_USER_DATA_CANCEL = `${prefix}FETCH_USER_DATA_CANCEL`;

/*
 * ACTIONS
 */

const fetchUserDataSuccess = data => ({
  type: FETCH_USER_DATA_SUCCESS,
  data,
});

const fetchUserData = options => ({
  type: FETCH_USER_DATA,
  payload: {
    url: 'userData',
    method: 'post',
    ...options,
  },
});

const fetchUserDataCancel = () => ({
  type: FETCH_USER_DATA_CANCEL,
});

/*
 * REDUCER
 */

const initialState = {};

const reducer = (state = initialState, action) => {
  const actions = {
    [FETCH_USER_DATA_SUCCESS]: () => ({
      ...action.data,
    }),
  };

  return (actions[action.type] && actions[action.type]()) || state;
};

/*
 * LOGIC
 */

const fetchUserDataLogic = createLogic({
  type: FETCH_USER_DATA,
  cancelType: [FETCH_USER_DATA_CANCEL],
  latest: true,
  process({ action: { payload }, httpClient, cancelled$ }) {
    return httpClient.cancellable(payload, cancelled$)
      .then(({ data }) => fetchUserDataSuccess(data));
  },
});

/*
 * SELECTORS
 */

const getUserData = state => state;

/*
 * EXPORTS
 */

export default reducer;

export const actions = {
	fetchUserData,
  fetchUserDataSuccess,
  fetchUserDataCancel,
};

export const types = {
  FETCH_USER_DATA,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_CANCEL,
};

export const logic = {
  fetchUserDataLogic,
};

export const selectors = {
	getUserData,
};
```