import React from 'react'
import { Link } from 'react-router-dom'
export default function nav() {
  return (
    <>
    <Link to ="/" >Home</Link>
    <Link to = "/todos">Todos</Link>
    </>
  )
}
