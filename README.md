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

export const name = 'default';

const prefix = `${name}/`;

/*
 * TYPES
 */

const FETCH_DEFAULT = `${prefix}FETCH_DEFAULT`;
const FETCH_DEFAULT_SUCCESS = `${prefix}FETCH_DEFAULT_SUCCESS`;
const FETCH_DEFAULT_CANCEL = `${prefix}FETCH_DEFAULT_CANCEL`;

export const types = {
  FETCH_DEFAULT,
  FETCH_DEFAULT_SUCCESS,
  FETCH_DEFAULT_CANCEL,
};


/*
 * ACTIONS
 */

const fetchDefault = options => ({
  type: FETCH_DEFAULT,
  payload: {
    url: 'default',
    method: 'post',
    ...options,
  },
});

const fetchDefaultSuccess = data => ({
  type: FETCH_DEFAULT_SUCCESS,
  data,
});

const fetchDefaultCancel = () => ({
  type: FETCH_DEFAULT_CANCEL,
});

export const actions = {
  fetchDefault,
  fetchDefaultSuccess,
  fetchDefaultCancel,
};


/*
 * SELECTORS
 */

const getState = state => state[name];
const getDefault = state => getState(state);

export const selectors = {
	getState,
  getDefault,
};


/*
 * LOGIC
 */

const fetchDefaultLogic = createLogic({
  type: FETCH_DEFAULT,
  cancelType: [FETCH_DEFAULT_CANCEL],
  latest: true,
  process({ action: { payload }, httpClient, cancelled$ }) {
    return httpClient.cancellable(payload, cancelled$)
      .then(({ data }) => fetchDefaultSuccess(data));
  },
});

export const logic = {
  fetchDefaultLogic,
};


/*
 * REDUCER
 */

const initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
    case FETCH_DEFAULT_SUCCESS:
      return {
        ...action.data
      };
    default:
      return state;
  }
};

export default reducer;
```