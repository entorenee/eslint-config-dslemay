module.exports = {
  '*.js': ['prettier --write', 'eslint --fix', 'git add'],
  '*.md': ['prettier --write', 'git add'],
};
