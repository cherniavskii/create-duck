const toCamelCase = (string) => {
  const lower = string.toLowerCase();
  return lower.split('-').map((word, index) => (
    index > 0 ? word[0].toUpperCase() + word.substr(1) : word
  )).join('');
};

const generateDuckNames = (string) => {
  const duckName = toCamelCase(string);
  const DuckName = duckName[0].toUpperCase() + duckName.substr(1);
  const DUCK_NAME = string.toUpperCase().split('-').join('_');
  return {
    name: duckName,
    Name: DuckName,
    NAME: DUCK_NAME,
  }
};

module.exports = {
  toCamelCase: toCamelCase,
  generateDuckNames: generateDuckNames,
}
