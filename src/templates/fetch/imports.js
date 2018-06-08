module.exports = ({ names, useReselect }) => {
  return (
    `import { createLogic } from 'redux-logic';`
+

(useReselect ?
`
import { createSelector } from 'reselect';`
	:
	''
)
  );
};