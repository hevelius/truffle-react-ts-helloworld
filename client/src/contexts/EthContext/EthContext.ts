import { createContext } from "react"

interface IEthContext {
  artifact: null
  web3: null
  accounts: null
  networkID: null
  contract: null
}

const web3InitialState: IEthContext = {
  artifact: null,
  web3: null,
  accounts: null,
  networkID: null,
  contract: null,
}

const EthContext = createContext<IEthContext>(web3InitialState)

export default EthContext
