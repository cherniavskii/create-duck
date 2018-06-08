module.exports = ({ names }) => {
  var NAME = names.NAME;

  return (
`
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
};`
);
};