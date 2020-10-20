import React ,{useState} from 'react'
import {inject,observer} from 'mobx-react'

const Analytics = inject('list')(observer((props)=>{
    return(
        <div>
            Analytics
        </div>
    )
}))

export default Analytics