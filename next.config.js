
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['3PrTx1j8FMCduLs2kY48ad'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  