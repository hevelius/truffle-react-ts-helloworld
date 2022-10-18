const Contract = () => (
    <code>
      {`contract HelloWorld {
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
}`}
    </code>
  );

export default Contract;
