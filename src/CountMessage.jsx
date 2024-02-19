import React from 'react'

const CountMessage = (props) => {
  return (
    <p>You have read <b>{props.count}</b> pieces of advice</p>
  )
}

export default CountMessage