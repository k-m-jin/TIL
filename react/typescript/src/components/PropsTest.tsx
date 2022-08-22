import React from 'react'

type MyProps = {
  name: string
}
// const PropsTest: React.FC<MyProps> = ({ name }) => <div>Hello {name}</div>
const PropsTest = ({ name }: MyProps) => <div>Hello {name}</div>

export default PropsTest
