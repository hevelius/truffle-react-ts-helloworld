var HelloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
  // deployment steps
  deployer.deploy(HelloWorld);
};
