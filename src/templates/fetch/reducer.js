module.exports = ({ names }) => {
  var NAME = names.NAME;

  return (
`
/*
 * REDUCER
 */

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_${NAME}_SUCCESS:
      return {
        ...action.data,
      };
    default:
      return state;
  }
};

export default reducer;`
);
};