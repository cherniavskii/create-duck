module.exports = ({ names, reselect }) => {
  var Name = names.Name;

  return (
`
/*
 * SELECTORS
 */

const getState = state => state[name];
`

+

(reselect ?

`const get${Name} = createSelector(
  getState,
  state => state,
);`

:

`const get${Name} = state => getState(state);`
)

+

`

export const selectors = {
  getState,
  get${Name},
};`
);
};
