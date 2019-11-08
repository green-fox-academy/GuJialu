import React from "react"
class ErrorCode extends React.Component{
  render(){
    return <h1>Error: {"<"}{this.props.match.params.code}{">"}</h1>;
  }
}

export default ErrorCode;