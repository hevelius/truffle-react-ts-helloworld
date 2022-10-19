import React, { useReducer, useCallback, useEffect } from "react"
import Web3 from "web3"
import { AbiItem } from "web3-utils"
import EthContext from "./EthContext"
import HelloWorldCompiledContract from "../../contracts/HelloWorld.json"
import { HelloWorld } from "../../../../backend/types/web3-v1-contracts/HelloWorld"
import { reducer, actions, initialState } from "../../reducers/state"

type Props = {
  children: React.ReactNode
}

const EthProvider = (props: Props) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialState)

  const init = useCallback(async (artifact: typeof HelloWorldCompiledContract) => {
    if (artifact) {
      const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")
      const accounts = await web3.eth.requestAccounts()
      const networkID = await web3.eth.net.getId()
      const deployedNetwork = (artifact.networks as any)[networkID]
      const address = deployedNetwork?.address
      const { abi } = artifact
      const contract = new web3.eth.Contract(
        abi as AbiItem[],
        address
      ) as unknown as HelloWorld

      dispatch({
        type: actions.init,
        data: { artifact, web3, accounts, networkID, contract },
      })
    }
  }, [])

  useEffect(() => {
    const tryInit = async () => {
      try {
        init(HelloWorldCompiledContract)
      } catch (err) {
        console.error(err) // eslint-disable-line no-console
      }
    }

    tryInit()
  }, [init])

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"]
    const handleChange = () => {
      init(HelloWorldCompiledContract)
    }

    events.forEach((e) => window.ethereum.on(e, handleChange))
    return () => {
      events.forEach((e) => window.ethereum.removeListener(e, handleChange))
    }
  }, [init])

  return (
    <EthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </EthContext.Provider>
  )
}

export default EthProvider
