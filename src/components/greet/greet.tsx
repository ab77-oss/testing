import React from 'react'
type greetProps = {
    name?:string
}
const Greet:React.FC<greetProps> = ({
    name
}) => {
  return (
    <div>Hello {name}</div>
  )
}

export default Greet