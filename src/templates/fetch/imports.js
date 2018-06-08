module.exports = ({ names, reselect }) => {
  return (
    `import { createLogic } from 'redux-logic';`
+

(reselect ?
`
import { createSelector } from 'reselect';`
	:
	''
)
  );
};
