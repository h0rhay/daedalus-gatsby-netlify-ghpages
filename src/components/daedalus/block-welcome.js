import React from 'react'
import TriangleSeparator from './triangle-separator'

const BlockWelcome = (props) =>
  (
    <div id='blockWelcome'>
      <TriangleSeparator />
      {console.log('props', props)}
      <div className="welcome text-center pt-5 pr-5 pb-5 pl-5 mt-0 mr-md-5 mb-5 ml-md-5">
        <h2>{props.mainpitch.title}</h2>
        <p>{props.mainpitch.description}</p>
      </div>
    </div>
  )

export default BlockWelcome
