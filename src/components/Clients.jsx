import React ,{useState} from 'react'
import {inject,observer} from 'mobx-react'

const Clients =inject('list')(observer((props)=>{
return(
    <div>Clients</div>
)

}))

export default Clients