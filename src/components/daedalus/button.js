import React from 'react'

const Button = (props) => {

  return (
    <button type="button" className={`btn btn-${props.type}`}>{`${props.text}`}</button>
  )

}

export default Button