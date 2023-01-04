import React from 'react'
import { data } from './data'

const CardList = () => {
  return (
    <div>
      {
        data.map(({id, name, image}) => <Card/>)
      }
    </div>
  )
}

export default CardList