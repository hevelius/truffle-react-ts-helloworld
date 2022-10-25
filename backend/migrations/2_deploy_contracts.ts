const HelloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
    deployer.deploy(HelloWorld);
}as Truffle.Migration;

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {};
