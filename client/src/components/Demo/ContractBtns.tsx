import { useState } from "react";
import { HelloWorld } from "../../../../backend/types/web3-v1-contracts/HelloWorld";
import useEth from "../../contexts/EthContext/useEth";

type Props = {
  setValue: (value: string) => void;
}
const ContractBtns = (props: Props) => {
  const { contract, accounts } = useEth();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
      setInputValue(e.target.value);
  };

  const read = async () => {
    if (contract !== null && accounts !== null) {
      const instance: HelloWorld = contract;
      const value = await instance.methods.getHelloWorld().call({ from: accounts[0] });
      props.setValue(value);
    }
  };

  const write = async (e: any) => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue =inputValue;
    if (contract !== null && accounts !== null){
      const instance: HelloWorld = contract;
      await instance.methods.setHelloWorld(newValue).send({ from: accounts[0] });
    }

  };

  return (
    <div className="btns">

      <button onClick={read}>
        getHelloWorld()
      </button>

      <div onClick={write} className="input-btn">
        setHelloWorld(<input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>

    </div>
  );
}

export default ContractBtns;
