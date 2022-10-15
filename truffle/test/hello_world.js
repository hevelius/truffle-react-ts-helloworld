const HelloWorld = artifacts.require("HelloWorld");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("HelloWorld", function (/* accounts */) {
  it("should assert true", async function () {
    await HelloWorld.deployed();
    return assert.isTrue(true);
  });

  it("should returns HelloWorld string", async () => {
    const instance = await HelloWorld.deployed();
    const value = await instance.getHelloWorld();
    assert.equal(value, "HelloWorld");
  });

  it("should set HelloMario string", async () => {
    const instance = await HelloWorld.deployed();
    await instance.setHelloWorld("HelloMario");
    const value = await instance.getHelloWorld();
    assert.equal(value, "HelloMario");
  });
});
