import React ,{useState} from 'react'
import {inject,observer} from 'mobx-react'

const Actions = inject('list')(observer((props)=>{
    return(
        <div>
            Actions
        </div>
    )
}))

export default Actions