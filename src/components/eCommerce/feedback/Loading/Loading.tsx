import { TLoading } from "src/types/shared.types"
import React from "react"

type TProps = {
  status:TLoading,
  error:string | null,
  children:React.ReactNode
}
const Loading = ({error,status,children}:TProps) => {

  if(status == "pending"){
    return (
        <div className="flex justify-start">Loading</div>
    )
  }
  if(status == "failed") return <p>{error}</p>
  return (<>{children}</>)
}

export default Loading