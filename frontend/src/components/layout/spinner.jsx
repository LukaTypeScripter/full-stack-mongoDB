import React,{Fragment} from 'react'
import spinner from './200w.gif'

export default () => (
    <Fragment>
        <img src={spinner} alt="loading..." 
        style={{width:'200px',margin:'auto',display:"block"}}
        />
    </Fragment>
)