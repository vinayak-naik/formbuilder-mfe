module.exports = (env) => {
  // eslint-disable-next-line
  return require(`./webpack.${env.environment}.js`);
};
