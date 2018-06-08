module.exports = (names, useReselect, cancellable) => {
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