module.exports = (names) => {
  var Name = names.Name,
      NAME = names.NAME;

  return (
`
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
};`
);
};