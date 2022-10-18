// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
  string private greeter;

  constructor() {
    greeter = "HelloWorld";
  }

  function getHelloWorld() public view returns (string memory) {
    return greeter;
  }

  function setHelloWorld(string memory helloText) public {
    greeter = helloText;
  }
}
