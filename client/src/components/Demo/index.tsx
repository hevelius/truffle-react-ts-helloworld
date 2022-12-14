import { useState } from "react"
import React from "react";
import useEth from "../../contexts/EthContext/useEth"
import Title from "./Title"
import Cta from "./Cta"
import Contract from "./Contract"
import ContractBtns from "./ContractBtns"
import NoticeNoArtifact from "./NoticeNoArtifact"
import NoticeWrongNetwork from "./NoticeWrongNetwork"

const Demo = ():React.ReactElement => {
  const { artifact, contract } = useEth()
  const [value, setValue] = useState("")

  const demo = (
    <>
      <Cta />
      <div className="contract-container">
        <Contract />
        <ContractBtns setValue={setValue} />
      </div>
      {value}
    </>
  )

  return (
    <div className="demo">
      <Title />
      {!artifact ? <NoticeNoArtifact /> : !contract ? <NoticeWrongNetwork /> : demo}
    </div>
  )
}

export default Demo
