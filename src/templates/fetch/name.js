module.exports = ({ names }) => {
  var name = names.name;
  return (
`
export const name = '${name}';

const prefix = \`\${name}/\`;`
);
};