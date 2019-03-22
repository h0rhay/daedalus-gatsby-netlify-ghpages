import React from 'react'
// import circle from '../../assets/images/daedalus-bg.svg'

const Bgspinner = (props) => {
  return (
    <div style={{height:0}} id='bgSpinner'>
    	<div className={`bg ${props.position || `` }`}/>
    </div>
  )
}

export default Bgspinner