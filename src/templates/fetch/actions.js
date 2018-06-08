module.exports = ({ names, url }) => {
  var name = names.name,
      NAME = names.NAME,
      Name = names.Name;

  return (
`
/*
 * ACTIONS
 */

const fetch${Name} = options => ({
  type: FETCH_${NAME},
  payload: {
    url: '${url}',
    method: 'get',
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
};`
);
};
