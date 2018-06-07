module.exports = (names) => {
	var name = names.name,
			Name = names.Name,
			NAME = names.NAME;
	return (
		`import { createLogic } from 'redux-logic';

const prefix = '${name}/';

/*
 * TYPES
 */

const FETCH_${NAME} = \`\${prefix}FETCH_${NAME}\`;
const FETCH_${NAME}_SUCCESS = \`\${prefix}FETCH_${NAME}_SUCCESS\`;
const FETCH_${NAME}_CANCEL = \`\${prefix}FETCH_${NAME}_CANCEL\`;

export const types = {
  FETCH_${NAME},
  FETCH_${NAME}_SUCCESS,
  FETCH_${NAME}_CANCEL,
};


/*
 * ACTIONS
 */

const fetch${Name} = options => ({
  type: FETCH_${NAME},
  payload: {
    url: '${name}',
    method: 'post',
    ...options,
  },
});

const fetch${Name}Success = data => ({
  type: FETCH_${NAME}_SUCCESS,
  data,
});

const fetch${Name}Cancel = () => ({
  type: FETCH_${NAME}_CANCEL,
});

export const actions = {
  fetch${Name},
  fetch${Name}Success,
  fetch${Name}Cancel,
};


/*
 * SELECTORS
 */

const get${Name} = state => state;

export const selectors = {
  get${Name},
};


/*
 * LOGIC
 */

const fetch${Name}Logic = createLogic({
  type: FETCH_${NAME},
  cancelType: [FETCH_${NAME}_CANCEL],
  latest: true,
  process({ action: { payload }, httpClient, cancelled$ }) {
    return httpClient.cancellable(payload, cancelled$)
      .then(({ data }) => fetch${Name}Success(data));
  },
});

export const logic = {
  fetch${Name}Logic,
};


/*
 * REDUCER
 */

const initialState = {};

const reducer = (state = initialState, action) => {
  const actions = {
    [FETCH_${NAME}_SUCCESS]: () => ({
      ...action.data,
    }),
  };

  return (actions[action.type] && actions[action.type]()) || state;
};

export default reducer;
`
);
};
