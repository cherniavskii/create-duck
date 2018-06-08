module.exports = ({ names, cancellable }) => {
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
  latest: true,`

+
(cancellable ?
`
  process({ action: { payload }, httpClient, cancelled$ }) {
    return httpClient.cancellable(payload, cancelled$)
`
:
`
  process({ action: { payload }, httpClient }) {
    return httpClient(payload)
`
)
+
`      .then(({ data }) => fetch${Name}Success(data));
  },
});

export const logic = {
  fetch${Name}Logic,
};`
);
};