module.exports = ({ names, useReselect }) => {
  var Name = names.Name;

  return (
`
/*
 * SELECTORS
 */

const getState = state => state[name];
`

+

(useReselect ?

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