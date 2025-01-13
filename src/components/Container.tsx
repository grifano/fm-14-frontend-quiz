import React, { FC } from 'react'

type Container = {
    children: React.ReactNode;
}

const Container: FC<Container> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Container